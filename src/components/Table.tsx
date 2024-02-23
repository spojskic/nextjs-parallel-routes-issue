'use client';

import clsx from 'clsx';
import { Children, createContext, CSSProperties, HTMLProps, isValidElement, useContext, useMemo } from 'react';

function BaseTable({
    className,
    children,
    ...rest
}: HTMLProps<HTMLTableElement>) {
    return (
        <div className="overflow-auto rounded-lg border  border-gray-300">
            <table className={clsx('w-full', className)} {...rest}>
                {children}
            </table>
        </div>
    );
}

export function Table(props: HTMLProps<HTMLTableElement>) {
    return <BaseTable {...props} />;
}

export interface TableRowProps extends HTMLProps<HTMLTableRowElement> {
    enableHover?: boolean;
}

export function TableRow({
    className,
    enableHover = false,
    ...rest
}: TableRowProps) {
    return (
        <tr
            className={clsx(
                'bg-white odd:bg-gray-50',
                className,
                enableHover ? 'hover:bg-gray-200' : '',
            )}
            {...rest}
        />
    );
}

interface TableHeaderRowContextData {
    totalWidth: number;
}

const TableHeaderRowContext = createContext<TableHeaderRowContextData>(
    {} as TableHeaderRowContextData,
);

function useTotalWidth(): number {
    const context = useContext(TableHeaderRowContext);
    return context.totalWidth;
}

export function TableHeaderRow({
    className,
    children,
    ...rest
}: HTMLProps<HTMLTableRowElement>) {
    const totalWidth = Children.toArray(children).reduce(
        (prev: number, child) =>
            isValidElement(child) && prev + (child.props.width || 0),
        0,
    );

    const contextData = useMemo<TableHeaderRowContextData>(
        () => ({
            totalWidth,
        }),
        [totalWidth],
    );

    return (
        <TableRow className={className} {...rest}>
            <TableHeaderRowContext.Provider value={contextData}>
                {children}
            </TableHeaderRowContext.Provider>
        </TableRow>
    );
}

export interface TableHeaderCellProps extends HTMLProps<HTMLTableCellElement> {
    fixedWidth?: number;
    width?: number;
}

export function TableHeaderCell({
    fixedWidth,
    width,
    className,
    ...rest
}: TableHeaderCellProps) {
    const totalWidth = useTotalWidth();

    function calculateWidth(): CSSProperties {
        if (fixedWidth) {
            return { minWidth: fixedWidth, maxWidth: fixedWidth };
        }

        if (width) {
            return { width: `${(width / totalWidth) * 100.0}%` };
        }

        return {};
    }

    return (
        <th
            style={calculateWidth()}
            className={clsx(
                'whitespace-nowrap bg-white px-4 py-2 text-left',
                className,
            )}
            {...rest}
        />
    );
}

export function TableCell({
    className,
    ...rest
}: HTMLProps<HTMLTableCellElement>) {
    return (
        <td
            className={clsx(
                'break-words border-x-0 border-t border-gray-200 p-4',
                className,
            )}
            {...rest}
        />
    );
}

export type Direction = 'asc' | 'desc' | undefined;

export interface SortableTableHeaderCellProps extends TableHeaderCellProps {
    columnName: string;
    onSort: (columnName: string, nextDirection: Direction) => void;
    direction?: Direction;
}

export function SortableTableHeaderCell({
    columnName,
    onSort,
    direction,
    className,
    children,
    ...rest
}: SortableTableHeaderCellProps) {
    function getNextDirection(): Direction {
        switch (direction) {
            case undefined: // no sort selected, sort in ascending order
                return 'asc';
            case 'asc': // ascending order selected, reverse the order
                return 'desc';
            default: // descending order selected, clear sort
                return undefined;
        }
    }

    function getSortIconClassName(): string {
        if (!direction) {
            return 'text-gray-400';
        }

        if (direction === 'desc') {
            return 'rotate-180';
        }

        return '';
    }

    return (
        <TableHeaderCell
            className={clsx('cursor-pointer select-none', className)}
            onClick={() => onSort(columnName, getNextDirection())}
            {...rest}
        >
            {children}
            direction ? 'faArrowUp' : 'faArrowDown'
        </TableHeaderCell>
    );
}

export function NoDataRow(props: HTMLProps<HTMLTableRowElement>) {
    return (
        <TableRow {...props}>
            <TableCell className="text-center" colSpan={1000}>
                No data
            </TableCell>
        </TableRow>
    );
}

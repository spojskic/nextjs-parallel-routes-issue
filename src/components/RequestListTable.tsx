'use client';

import {
    NoDataRow,
    Table, TableCell,
    TableHeaderCell,
    TableHeaderRow, TableRow
} from '@/components/Table';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export interface ClubMemberInfo {
    id: string;
    disabled: boolean;
    name: string;
    gender: string;
    age: number;
    contact: {
        phoneNumber: string;
        email: string;
    };
    location?: {
        city: string;
        state: string;
        country: string;
    };
    dateOfRequest?: string;
    member: string;
    membershipPlan: string;
    membershipEndDate: string;
    tags: string[];
    balance: number;
}

export default function RequestListTable({
    requestList
}: {
    requestList: ClubMemberInfo[];
}) {
    const search = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const params = new URLSearchParams(search);

    const onTableRowClick = (requestId: string): void => {
        const isListPage = pathname.split('/').pop()?.endsWith('list');
        const newPathname = isListPage
            ? pathname
            : pathname.split('/').slice(0, -1).join('/');
        router.replace(`${ newPathname }/${ requestId }?${ params.toString() }`);
    };

    return (
        <Table>
            <thead className="bg-white">
            <TableHeaderRow>
                <TableHeaderCell
                    className="text-sm font-normal"
                >
                    Name
                </TableHeaderCell>
                <TableHeaderCell className="text-sm font-normal">
                    Location
                </TableHeaderCell>
                <TableHeaderCell
                    className="text-sm font-normal"
                >
                    Date of Request
                </TableHeaderCell>
                <TableHeaderCell
                    className="text-sm font-normal"
                >
                    Edit
                </TableHeaderCell>
            </TableHeaderRow>
            </thead>
            <tbody>
            { requestList.length === 0 ? (
                <NoDataRow />
            ) : (
                requestList.map((clubMemberRequest) => (
                    <TableRow
                        key={ clubMemberRequest.id }
                    >
                        <TableCell>
                            <div className="text-xs ">
                                <h3 className="font-medium text-gray-800">
                                    { clubMemberRequest.name }
                                </h3>
                                <div className="flex gap-x-1">
                                    <p className="text-xs text-gray-700">
                                        Gender: { clubMemberRequest.gender }
                                    </p>
                                    <p className="text-xs text-gray-700">
                                        Age: { clubMemberRequest.age }
                                    </p>
                                </div>
                                <p className="text-xs text-gray-700">
                                    { clubMemberRequest.contact.phoneNumber }
                                </p>
                                <p className="text-xs text-gray-700">
                                    { clubMemberRequest.contact.email }
                                </p>
                            </div>
                        </TableCell>
                        {/* todo: change name to location */ }
                        <TableCell>
                            <p className="text-xs font-normal">{ clubMemberRequest.name }</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs font-normal">
                                { clubMemberRequest.membershipEndDate } 8:00 AM
                            </p>
                        </TableCell>
                        <TableCell>
                            <button
                                type="button"
                                onClick={ () => onTableRowClick(clubMemberRequest.id) }
                                className="cursor-pointer text-indigo-600 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Edit
                            </button>
                        </TableCell>
                    </TableRow>
                ))
            ) }
            </tbody>
        </Table>
    );
}

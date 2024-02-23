'use client';

import React from 'react';

interface PaginationProps {
    totalRecords?: number;
    pageSize?: number;
    page: number;
    onChange: (page: number) => void;
}

const Pagination = ({
    totalRecords = 0,
    pageSize = 10,
    page,
    onChange,
}: PaginationProps) => {
    const totalPages = Math.ceil(totalRecords / pageSize);
    const isFirstPage = page === 1;
    const isLastPage = page === totalPages || totalPages === 0;

    const startRecord = totalRecords === 0 ? 0 : (page - 1) * pageSize + 1;
    const endRecord = Math.min(page * pageSize, totalRecords);

    return (
        <div className="flex w-full flex-wrap items-center md:gap-14">
      <span className="mb-2 w-full rounded bg-gray-300 px-2.5 py-1.5 text-center text-xs font-medium md:mb-0 md:w-fit md:bg-gray-100">
        Total: {startRecord} to {endRecord} of {totalRecords}
      </span>
            <div className="flex w-full items-center justify-between gap-1 md:w-fit md:gap-2">
                <button
                    type="button"
                    onClick={() => onChange(page - 1)}
                    disabled={isFirstPage}
                    className={`flex w-full items-center justify-center rounded border border-gray-300 bg-white px-2.5 py-1 text-sm font-medium hover:bg-gray-100 focus:border-gray-500 focus:outline-none ${
                        isFirstPage && 'cursor-default opacity-50 hover:bg-white'
                    }`}
                >
                    Previous
                </button>
                <button
                    type="button"
                    onClick={() => onChange(page + 1)}
                    disabled={isLastPage}
                    className={`flex w-full items-center justify-center rounded border border-gray-300 bg-white px-2.5 py-1 text-sm font-medium hover:bg-gray-100 focus:border-gray-500 focus:outline-none ${
                        isLastPage && 'cursor-default opacity-50 hover:bg-white'
                    }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination;

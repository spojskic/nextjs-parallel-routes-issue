'use client';

import Pagination from '@/components/Pagination';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

export default function PaginationWrapper({
    totalRecords,
    pageSize,
}: {
    totalRecords?: number;
    pageSize?: number;
    customPathname?: string;
}) {
    const { replace } = useRouter();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('current_page')) || 1;

    const handlePageChange = (newPage: number) => {
        const updatedSearchParams = new URLSearchParams(searchParams);
        updatedSearchParams.set('current_page', newPage.toString());
        const newQueryString = updatedSearchParams.toString();
        replace(`?${ newQueryString }`);
    };

    return (
        <>
            <div className="flex items-center bg-gray-50 px-4 pt-6 md:bg-white md:pt-0 lg:px-8 lg:pb-4 lg:pt-0">
                <Pagination
                    totalRecords={ totalRecords }
                    pageSize={ pageSize }
                    page={ currentPage }
                    onChange={ handlePageChange }
                />
            </div>
            <hr className="hidden lg:block" />
        </>
    );
}

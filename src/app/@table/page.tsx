import { getClubMembers } from '@/app/@table/getMemberData';
import PaginationWrapper from '@/components/PaginationWrapper';
import RequestListTable from '@/components/RequestListTable';
import React from 'react';

export default async function MembersRequestListPage({
    params,
    searchParams,
}: {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const { total, requestList } = await getClubMembers(searchParams);

    return (
        <div className="flex-1">
            <PaginationWrapper
                totalRecords={ total }
                pageSize={ 2 }
            />
            <div className="overflow-auto bg-gray-50 px-4 py-6 md:bg-white lg:px-8">
                <div className="hidden w-full md:table">
                    <RequestListTable requestList={ requestList } />
                </div>
            </div>
        </div>
    );
}

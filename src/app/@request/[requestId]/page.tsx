'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

export default function Page({}: {}) {
    const search = useSearchParams();
    const { replace } = useRouter();
    const params = new URLSearchParams(search);
    const pathname = usePathname();
    const onCloseClick = (): void => {
        const newPathname = pathname.split('/').slice(0, -1).join('/');
        replace(`/?${params.toString()}`);
    };

    return (
        <div className="flex-1 px-4 flex flex-col items-center">
            <button
                onClick={onCloseClick}
                type="button"
                className="px-4 py-2 mb-4 w-32 bg-red-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Close
            </button>
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

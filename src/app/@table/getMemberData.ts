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

const mockClubMembersData: ClubMemberInfo[] = [
    {
        id: 'f2466845-c4fd-4986-9974-430381007a82',
        disabled: true,
        name: 'mock',
        gender: 'M',
        age: 64,
        contact: {
            phoneNumber: 'mock',
            email: 'mock'
        },
        member: 'CLB',
        membershipPlan: 'Plan ABC',
        membershipEndDate: 'Feb 6 2025',
        tags: [ 'Tag 1 - Example', 'Tag 2 - Example' ],
        balance: 124.0
    },
    {
        id: 'a837c3bf-72d3-4e6b-89e0-51c91fd2f8a9',
        disabled: false,
        name: 'User 1',
        gender: 'F',
        age: 42,
        contact: {
            phoneNumber: 'mock',
            email: 'mock'
        },
        member: 'VIP',
        membershipPlan: 'Plan XYZ',
        membershipEndDate: 'May 15 2024',
        tags: [ 'Tag 3 - Sample', 'Tag 4 - Sample' ],
        balance: 75.5
    },
    {
        id: 'b124e0cf-8ae5-4a3c-ae9b-f4d6ec7e2d0d',
        disabled: true,
        name: 'User 123123',
        gender: 'M',
        age: 29,
        contact: {
            phoneNumber: '+19876543210',
            email: 'mock'
        },
        member: 'SILVER',
        membershipPlan: 'Plan DEF',
        membershipEndDate: 'Aug 22 2024',
        tags: [ 'Tag 5 - Demo', 'Tag 6 - Demo' ],
        balance: 150.2
    },
    {
        id: 'c78f6a9d-3d11-4e3e-bd88-9a45d7cfe211',
        disabled: false,
        name: 'User 143245355432',
        gender: 'F',
        age: 36,
        contact: {
            phoneNumber: 'mock',
            email: 'mock'
        },
        member: 'GOLD',
        membershipPlan: 'Plan GHI',
        membershipEndDate: 'Nov 10 2024',
        tags: [ 'Tag 7 - Illustration', 'Tag 8 - Illustration' ],
        balance: 200.0
    },
    {
        id: 'e5910fba-4b8c-4a5d-8e58-2e6a7a4e9f6c',
        disabled: true,
        name: 'User 3241',
        gender: 'M',
        age: 50,
        contact: {
            phoneNumber: 'mock',
            email: 'mock'
        },
        member: 'BRONZE',
        membershipPlan: 'Plan JKL',
        membershipEndDate: 'Apr 5 2025',
        tags: [ 'Tag 9 - Mock', 'Tag 10 - Mock' ],
        balance: 90.8
    },
    {
        id: 'f9a14c8a-35c6-4efb-b0f5-863f652546dc',
        disabled: false,
        name: 'User 142342',
        gender: 'F',
        age: 28,
        contact: {
            phoneNumber: 'mock',
            email: 'mock'
        },
        member: 'CLB',
        membershipPlan: 'Plan MNO',
        membershipEndDate: 'Dec 15 2025',
        tags: [ 'Tag 11 - Test', 'Tag 12 - Test' ],
        balance: 110.5
    },
    {
        id: 'd3b4c4e6-1a2b-4c5d-8e9f-1a2b3c4d5e6f',
        disabled: false,
        name: 'User 15235234',
        gender: 'M',
        age: 35,
        contact: {
            phoneNumber: 'mock',
            email: 'mock'
        },
        member: 'SILVER',
        membershipPlan: 'Plan PQR',
        membershipEndDate: 'Sep 30 2024',
        tags: [ 'Tag 13 - Random', 'Tag 14 - Random' ],
        balance: 180.3
    },
    {
        id: 'f8a7e6b2-c3d4-4a5e-8f9e-1b2c3d4e5f6a',
        disabled: true,
        name: 'User 12',
        gender: 'F',
        age: 48,
        contact: {
            phoneNumber: 'mock',
            email: 'mock'
        },
        member: 'GOLD',
        membershipPlan: 'Plan STU',
        membershipEndDate: 'Oct 12 2024',
        tags: [ 'Tag 15 - Prototype', 'Tag 16 - Prototype' ],
        balance: 250.7
    },
    {
        id: 'a1b2c3d4-e5f6-4a5b-8c9d-2e3f4a5b6c7d',
        disabled: false,
        name: 'User 13213',
        gender: 'M',
        age: 45,
        contact: {
            phoneNumber: '+mock',
            email: 'mock'
        },
        member: 'BRONZE',
        membershipPlan: 'Plan VWX',
        membershipEndDate: 'Jan 8 2025',
        tags: [ 'Tag 17 - Placeholder', 'Tag 18 - Placeholder' ],
        balance: 120.6
    },
    {
        id: 'b5c6d7e8-f9a0-4b5c-8d6e-1f2a3b4c5d6e',
        disabled: true,
        name: 'User 43241',
        gender: 'F',
        age: 31,
        contact: {
            phoneNumber: '+mock',
            email: 'mock'
        },
        member: 'VIP',
        membershipPlan: 'Plan YZ',
        membershipEndDate: 'Mar 20 2025',
        tags: [ 'Tag 19 - Template', 'Tag 20 - Template' ],
        balance: 95.2
    }
];

export async function getClubMembers(searchParams?: {
    [key: string]: string | string[] | undefined;
}): Promise<{
    clubMembers: ClubMemberInfo[];
    requestList: ClubMemberInfo[];
    total: number;
}> {
    await new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });

    // Ensure currentPage is a number
    const currentPage = parseInt(searchParams?.current_page as string, 10) || 1;
    // Ensure query is a string
    const query = Array.isArray(searchParams?.query)
        ? searchParams?.query[0] || ''
        : searchParams?.query || '';

    const filteredClubMembers = mockClubMembersData.filter((clubMember) =>
        clubMember.name.toLowerCase().includes(query.toLowerCase())
    );
    const filteredRequestList = mockClubMembersData.filter((requestList) =>
        requestList.name.toLowerCase().includes(query.toLowerCase())
    );
    const startIndex = (currentPage - 1) * 2;
    const endIndex = startIndex + 2;
    const pagedClubMembers = filteredClubMembers.slice(startIndex, endIndex);
    const pagedRequestList = filteredRequestList.slice(startIndex, endIndex);

    return {
        clubMembers: pagedClubMembers,
        requestList: pagedRequestList,
        total: mockClubMembersData.length
    };
}

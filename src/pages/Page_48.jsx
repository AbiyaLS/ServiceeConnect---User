import React from 'react'
import InvitationList_68 from '../components/invitationList_68';
import Component4 from '../components/Component4';

const Page_48 = () => {
    return (
        <div className="h-screen flex flex-col bg-gray-300">
            <Component4
                title="INVITE FRIEND"
                theme="black"
                showBack
                showFilter
                showSearch
            />

            {/* Content area */}
            <div className="flex-1 ">
                <InvitationList_68 />

            </div>
        </div>)
}

export default Page_48;
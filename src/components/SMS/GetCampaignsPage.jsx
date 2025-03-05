import React, { useState } from 'react';

function GetCampaignsPage() {
    const campaigns = [
        {
            id: 1,
            message: 'Hello! Don’t miss our summer sale.',
            recipients: ['john@example.com', 'jane@example.com', 'alex@example.com', 'lisa@example.com'],
            status: 'Sent',
        },
        {
            id: 2,
            message: 'Reminder: Your appointment is tomorrow.',
            recipients: ['alex@example.com', 'mike@example.com', 'sara@example.com'],
            status: 'Sent',
        },
        {
            id: 3,
            message: 'Exclusive offer just for you!',
            recipients: ['sam@example.com', 'lisa@example.com', 'chris@example.com'],
            status: 'Pending',
        },
    ];

    const [showPopup, setShowPopup] = useState(false);
    const [selectedRecipients, setSelectedRecipients] = useState([]);

    const handleSeeMore = (recipients) => {
        setSelectedRecipients(recipients);
        setShowPopup(true);
    };

    return (
        <div className=" mx-auto p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-6">Campaigns</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {campaigns.map((campaign) => (
                    <div key={campaign.id} className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Message</h3>
                        <p className="mb-4 text-gray-700">{campaign.message}</p>
                        <h3 className="text-xl font-semibold mb-2">Recipients</h3>
                        <ul className="list-disc list-inside mb-4">
                            {campaign.recipients.slice(0, 2).map((recipient, index) => (
                                <li key={index} className="text-gray-600">{recipient}</li>
                            ))}
                        </ul>
                        {campaign.recipients.length > 2 && (
                            <button 
                                onClick={() => handleSeeMore(campaign.recipients)} 
                                className="text-blue-500 underline cursor-pointer">
                                See all recepients
                            </button>
                        )}
                        <h3 className="text-xl font-semibold mb-2 mt-4">Status</h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-white ${campaign.status === 'Sent' ? 'bg-green-500' :  'bg-red-500'}`}>
                            {campaign.status}
                        </span>
                    </div>
                ))}
            </div>

            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-[80vh] overflow-y-auto">
                        <h2 className="text-xl font-bold mb-4">All Recipients</h2>
                        <ul className="list-disc list-inside">
                            {selectedRecipients.map((recipient, index) => (
                                <li key={index} className="text-gray-700 mb-2">{recipient}</li>
                            ))}
                        </ul>
                        <button 
                            onClick={() => setShowPopup(false)} 
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default GetCampaignsPage;

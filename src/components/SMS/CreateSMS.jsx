import React, { useState } from 'react';
import Select from 'react-select';

function CreateSMS() {
    const [message, setMessage] = useState('');
    const [recipients, setRecipients] = useState([]);
    const [scheduledAt, setScheduledAt] = useState('');

    const options = [
        { value: 'john@example.com', label: 'john@example.com' },
        { value: 'jane@example.com', label: 'jane@example.com' },
        { value: 'alex@example.com', label: 'alex@example.com' },
        { value: 'sam@example.com', label: 'sam@example.com' },
        { value: 'lisa@example.com', label: 'lisa@example.com' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ message, recipients, scheduledAt });
    };

    return (
        <div className="max-w-2xl min-h-[80vh] mx-auto p-6 bg-white ">
            <h2 className="text-2xl font-bold mb-6">Create SMS</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea
                        className="w-full p-2 border rounded-lg"
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message here..."
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Recipients</label>
                    <Select
                        options={options}
                        isMulti
                        value={recipients}
                        onChange={setRecipients}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Scheduled At</label>
                    <input
                        type="datetime-local"
                        className="w-full p-2 border rounded-lg"
                        value={scheduledAt}
                        onChange={(e) => setScheduledAt(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700"
                >
                    Create and Trigger SMS Compaign
                </button>
            </form>
        </div>
    );
}

export default CreateSMS;

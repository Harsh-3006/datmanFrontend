import React, { useState } from 'react';

function AddShopperPage() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Shopper Email:', email);
        alert(`Shopper with email ${email} added successfully!`);
        setEmail('');
    };

    return (
        <div className="max-w-2xl mx-auto p-6  min-h-[80vh] flex items-center justify-center">
            <div className="bg-white p-8 w-full">
                <h2 className="text-2xl font-bold mb-6">Add Shopper</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter shopper's email" 
                            required
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700">
                        Add Shopper
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddShopperPage;

import React, { useState } from 'react';

interface SignUpOrgProps { }




const SignUpOrg: React.FC<SignUpOrgProps> = () => {
    const [formData, setFormData] = useState({
        organization: '',
        email: '',
        address: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-5 border rounded shadow-lg">
            <div className="mb-4">
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700">Name of Organization</label>
                <input
                    type="text"
                    name="organization"
                    id="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <input
                    type="text"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Sign Up</button>
        </form>
    );
};

export default SignUpOrg;

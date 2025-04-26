import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from '../utils/AxiosInstance';
import React from 'react';

export default function ResetPassword() {
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post('/auth/reset-password', { token, newPassword: password });
            alert('Password berhasil diubah!');
            // Optional: redirect ke halaman login setelah reset berhasil
            window.location.href = '/login';
        } catch (err) {
            alert('Gagal reset password.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto mt-10 p-6 border rounded-lg shadow">
            <h2 className="text-2xl font-bold text-center">Reset Password</h2>
            <input
                type="password"
                placeholder="Masukkan Password Baru"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                className="border p-2 rounded-md"
                required
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
            >
                Reset Password
            </button>
        </form>
    );
}

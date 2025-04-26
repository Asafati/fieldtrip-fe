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
        } catch (err) {
            alert('Gagal reset password.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Reset Password</h2>
            <input
                type="password"
                placeholder="New password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
            <button type="submit">Reset Password</button>
        </form>
    );
}

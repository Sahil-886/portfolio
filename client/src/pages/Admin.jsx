import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import API_URL from '../config';

const Admin = () => {
    const [messages, setMessages] = useState([]);

    const fetchMessages = async () => {
        try {
            const res = await axios.get(`${API_URL}/api/messages`);
            setMessages(res.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    const deleteMessage = async (id) => {
        try {
            await axios.delete(`${API_URL}/api/messages/${id}`);
            setMessages(messages.filter(msg => msg._id !== id));
        } catch (error) {
            console.error('Error deleting message:', error);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    return (
        <div className="container section">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <h1 className="text-gradient" style={{ margin: 0 }}>Admin Dashboard</h1>
                <button
                    onClick={() => window.open(`${API_URL}/api/messages/export`, '_blank')}
                    className="btn-primary"
                    style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                    Export to Excel
                </button>
            </div>

            <div className="glass-card" style={{ padding: '20px', overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', color: 'white' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            <th style={{ padding: '15px', textAlign: 'left' }}>Date</th>
                            <th style={{ padding: '15px', textAlign: 'left' }}>Name</th>
                            <th style={{ padding: '15px', textAlign: 'left' }}>Email</th>
                            <th style={{ padding: '15px', textAlign: 'left' }}>Message</th>
                            <th style={{ padding: '15px', textAlign: 'center' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages.length === 0 ? (
                            <tr>
                                <td colSpan="5" style={{ padding: '20px', textAlign: 'center', color: '#aaa' }}>No messages found.</td>
                            </tr>
                        ) : (
                            messages.map((msg) => (
                                <tr key={msg._id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                    <td style={{ padding: '15px' }}>{new Date(msg.date).toLocaleDateString()}</td>
                                    <td style={{ padding: '15px' }}>{msg.name}</td>
                                    <td style={{ padding: '15px' }}>{msg.email}</td>
                                    <td style={{ padding: '15px' }}>{msg.message}</td>
                                    <td style={{ padding: '15px', textAlign: 'center' }}>
                                        <button
                                            onClick={() => deleteMessage(msg._id)}
                                            style={{ background: 'none', border: 'none', color: '#ff4444', cursor: 'pointer', fontSize: '1.2rem' }}
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;

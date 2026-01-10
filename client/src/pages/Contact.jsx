import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiKaggle } from 'react-icons/si';

import API_URL from '../config';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await axios.post(`${API_URL}/api/contact`, formData);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div className="container section">
            <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px' }}>
                <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center' }}>Get In Touch</h1>

                <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>

                    {/* Social Info */}
                    <div>
                        <h3 className="text-neon" style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Connect with me</h3>
                        <p style={{ marginBottom: '30px', color: '#ccc' }}>
                            I'm always open to new opportunities and collaborations.
                            Feel free to reach out via email or connect on social media.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <a href="https://linkedin.com/in/sahil-makhamale" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-neon" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem' }}>
                                <FaLinkedin size={30} color="#0077b5" /> LinkedIn
                            </a>
                            <a href="https://github.com/Sahil-886" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-neon" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem' }}>
                                <FaGithub size={30} color="#fff" /> GitHub
                            </a>
                            <a href="https://www.kaggle.com/sahilmakhamale" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-neon" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem' }}>
                                <SiKaggle size={30} color="#20BEFF" /> Kaggle
                            </a>
                            <a href="mailto:sahilmakhamale88@gmail.com" className="flex items-center gap-2 hover:text-neon" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem' }}>
                                <FaEnvelope size={30} color="#bd00ff" /> sahilmakhamale88@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            className="form-input"
                            style={{ resize: 'none' }}
                        ></textarea>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="btn-primary"
                            style={{ width: '100%' }}
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </motion.button>

                        {status === 'success' && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                style={{ marginTop: '15px', color: '#4ade80', textAlign: 'center' }}
                            >
                                Message sent successfully!
                            </motion.p>
                        )}
                        {status === 'error' && (
                            <p style={{ marginTop: '15px', color: '#ef4444', textAlign: 'center' }}>
                                Something went wrong. Please try again.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;

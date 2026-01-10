import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
    const certifications = [
        {
            name: 'Python for Data Science',
            platform: 'Coursera',
            year: '2025',
            image: 'https://via.placeholder.com/400x200?text=Certificate+1'
        },
        {
            name: 'Deep Learning Specialization',
            platform: 'DeepLearning.AI',
            year: '2024',
            image: 'https://via.placeholder.com/400x200?text=Certificate+2'
        },
        {
            name: 'Google Data Analytics',
            platform: 'Google',
            year: '2024',
            image: 'https://via.placeholder.com/400x200?text=Certificate+3'
        },
        {
            name: 'Advanced React Development',
            platform: 'Udemy',
            year: '2023',
            image: 'https://via.placeholder.com/400x200?text=Certificate+4'
        }
    ];

    return (
        <div className="container section">
            <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '50px', textAlign: 'center' }}>Certifications</h1>
            <div className="grid-3">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        className="glass-card"
                        whileHover={{ rotateY: 10, rotateX: 5, z: 50 }}
                        style={{ overflow: 'hidden', perspective: '1000px', transformStyle: 'preserve-3d' }}
                    >
                        <div style={{ height: '200px', overflow: 'hidden' }}>
                            <img src={cert.image} alt={cert.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ padding: '20px' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>{cert.name}</h3>
                            <p style={{ color: 'var(--primary-blue)', marginBottom: '5px' }}>{cert.platform}</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Issued: {cert.year}</p>
                            <button className="btn-outline" style={{ marginTop: '15px', width: '100%' }}>View Credential</button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;

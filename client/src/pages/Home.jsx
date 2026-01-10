import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaDatabase, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiKaggle, SiTensorflow, SiPytorch, SiMysql } from 'react-icons/si';

const Home = () => {
    const skills = [
        { name: 'Python', icon: <FaPython color="#3776AB" /> },
        { name: 'Advance Excel', icon: <SiJavascript color="#F7DF1E" /> },
        { name: 'Data Analysis', icon: <FaReact color="#61DAFB" /> },
        { name: 'Machine Learning', icon: <SiTensorflow color="#FF6F00" /> },
        { name: 'Deep Learning', icon: <SiPytorch color="#EE4C2C" /> },
        { name: 'Data Science', icon: <SiKaggle color="#20BEFF" /> },
        { name: 'SQL', icon: <SiMysql color="#4479A1" /> },
        { name: 'Git & GitHub', icon: <FaGithub color="#ffffff" /> },
    ];

    return (
        <div className="container">
            {/* Hero Section */}
            <section className="section" style={{ minHeight: '90vh', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ flex: 1, minWidth: '300px' }}
                >
                    <h2 className="text-neon" style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Hello, I'm Sahil Makhamale</h2>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', lineHeight: 1.2, margin: '0 0 20px 0' }}>
                        <span className="text-gradient">Sahil Makhamale</span>
                    </h1>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                        AI / ML & Data Science Enthusiast
                    </h3>
                    <p style={{ fontSize: '1.1rem', maxWidth: '600px', marginBottom: '30px', color: '#ccc' }}>
                        I am a passionate AI / ML & Data Science Enthusiast with a strong background in programming and a deep interest in building intelligent systems and scalable web applications.
                        I bridge the gap between complex data and user-friendly interfaces.
                    </p>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <a href="/projects" className="btn-primary">View Projects</a>
                        <a href="/contact" className="btn-outline">Contact Me</a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="animate-float"
                    style={{ flex: 1, display: 'flex', justifyContent: 'center', minWidth: '300px' }}
                >
                    <div className="glass-card" style={{ padding: '10px', borderRadius: '50%', width: '350px', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle, rgba(189,0,255,0.2) 0%, rgba(0,0,0,0) 70%)' }}>
                        <img
                            src="https://via.placeholder.com/300"
                            alt="Profile"
                            style={{ borderRadius: '50%', width: '300px', height: '300px', objectFit: 'cover', border: '2px solid var(--primary-blue)' }}
                        />
                    </div>
                </motion.div>
            </section>

            {/* Skills Section */}
            <section className="section" style={{ alignItems: 'flex-start' }}>
                <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center', width: '100%' }}>Technical Skills</h2>
                <div className="grid-3" style={{ width: '100%' }}>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }}
                            className="glass-card"
                            style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '15px', cursor: 'default' }}
                        >
                            <div style={{ fontSize: '2rem' }}>{skill.icon}</div>
                            <h3 style={{ fontSize: '1.2rem' }}>{skill.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;

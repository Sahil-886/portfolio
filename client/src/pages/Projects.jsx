import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'ML Prediction System',
            description: 'A robust machine learning system that predicts housing prices with 95% accuracy using Random Forest.',
            stack: ['Python', 'Scikit-Learn', 'Flask', 'React'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Data Analysis Dashboard',
            description: 'Interactive dashboard visualizing sales data across regions using D3.js and React.',
            stack: ['React', 'D3.js', 'Node.js', 'MongoDB'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Deep Learning Image Classifier',
            description: 'CNN based model to classify images into 1000 categories with real-time inference API.',
            stack: ['PyTorch', 'FastAPI', 'Docker'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Full-Stack Portfolio',
            description: 'The website you are currently viewing. Built with modern web technologies and glassmorphism design.',
            stack: ['React', 'Node.js', 'Express', 'Framer Motion'],
            github: '#',
            demo: '#'
        }
    ];

    return (
        <div className="container section">
            <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '50px', textAlign: 'center' }}>Projects</h1>
            <div className="grid-3">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="glass-card"
                        whileHover={{ y: -10, boxShadow: '0 10px 40px rgba(0, 243, 255, 0.2)' }}
                        style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '300px' }}
                    >
                        <div>
                            <h3 className="text-neon" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>{project.title}</h3>
                            <p style={{ marginBottom: '20px', color: '#ddd' }}>{project.description}</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                                {project.stack.map(tech => (
                                    <span key={tech} style={{ background: 'rgba(255,255,255,0.1)', padding: '5px 10px', borderRadius: '20px', fontSize: '0.85rem', color: 'var(--primary-blue)' }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '15px' }}>
                            <a href={project.github} className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px' }}>
                                <FaGithub /> Code
                            </a>
                            <a href={project.demo} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px' }}>
                                <FaExternalLinkAlt /> Live
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

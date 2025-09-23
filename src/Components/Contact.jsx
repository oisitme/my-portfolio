import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        const serviceID = 'service_edxijph';
        const templateID = 'template_tyen59e';
        const userID = 'wNISsR78GTKFnabA5';

        emailjs.send(serviceID, templateID, {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
        }, userID)
        .then(() => {
            setSubmitted(true);
            setForm({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitted(false), 2500);
        })
        .catch((err) => {
            setError('Failed to send message. Please try again.');
        })
        .finally(() => setLoading(false));
    };

    return (
        <>
            <section id="contact" className="w-full flex justify-center items-center py-16 bg-gradient-to-b from-black via-gray-900 to-gray-800">
                <motion.div
                    className="w-full max-w-lg bg-white/10 rounded-3xl shadow-2xl p-8 md:p-12 mx-4"
                    initial={{ opacity: 0, y: 250 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: 'easeIn' }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-2xl md:text-4xl font-bold text-center text-white mb-8"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Contact Me
                    </motion.h2>
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit} autoComplete="off">
                        <motion.input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            className="rounded-xl px-4 py-3 bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all border border-white/20"
                            whileFocus={{ scale: 1.04, boxShadow: '0 0 0 2px #00f0ff' }}
                            whileHover={{ scale: 1.02 }}
                            required
                        />
                        <motion.input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={form.email}
                            onChange={handleChange}
                            className="rounded-xl px-4 py-3 bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all border border-white/20"
                            whileFocus={{ scale: 1.04, boxShadow: '0 0 0 2px #00f0ff' }}
                            whileHover={{ scale: 1.02 }}
                            required
                        />
                        <motion.textarea
                            name="message"
                            placeholder="Your Message"
                            value={form.message}
                            onChange={handleChange}
                            rows={5}
                            className="rounded-xl px-4 py-3 bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all border border-white/20 resize-none"
                            whileFocus={{ scale: 1.03, boxShadow: '0 0 0 2px #00f0ff' }}
                            whileHover={{ scale: 1.01 }}
                            required
                        />
                        <motion.button
                            type="submit"
                            className="mt-2 py-3 rounded-xl bg-gradient-to-r from-blue-700 to-blue-400 text-white font-bold text-lg shadow-lg hover:from-blue-800 hover:to-blue-500 transition-all disabled:opacity-60"
                            whileTap={{ scale: 0.97 }}
                            whileHover={{ scale: 1.04, boxShadow: '0 4px 24px #00f0ff77' }}
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </motion.button>
                    </form>
                    {submitted && (
                        <motion.p
                            className="text-green-300 text-center mt-4 text-lg font-semibold"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                        >
                            Thank you! Your message has been sent.
                        </motion.p>
                    )}
                    {error && (
                        <motion.p
                            className="text-red-400 text-center mt-4 text-lg font-semibold"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                        >
                            {error}
                        </motion.p>
                    )}
                </motion.div>
            </section>
            <motion.footer
                className="w-full bg-black/80 py-6 flex flex-col md:flex-row items-center justify-between px-6 gap-3 border-t border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true }}
            >
                <span className="text-gray-300 text-sm md:text-base">&copy; {new Date().getFullYear()} Raushan Kumar. All rights reserved.</span>
                <div className="flex gap-5 mt-2 text-white md:mt-0">
                    <a href="https://wa.me/7065508384" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors" aria-label="WhatsApp">
                        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.19-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.23-1.44l-.37-.22-3.68.97.98-3.59-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/oisitme/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
                    </a>
                    <a href="https://github.com/oisitme" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors" aria-label="GitHub">
                        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.288-.012-1.243-.018-2.25-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.922.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z"/></svg>
                    </a>
                </div>
            </motion.footer>
        </>
    );
}

export default Contact;
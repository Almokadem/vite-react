import { useState } from 'react';

// Contact Form Component
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send to an API or email service)
        alert('Message sent!');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-md">
            <div className="mb-4">
                <label htmlFor="name" className="text-white">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 mt-2 rounded-md bg-gray-700 text-white"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="text-white">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 mt-2 rounded-md bg-gray-700 text-white"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="subject" className="text-white">Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 mt-2 rounded-md bg-gray-700 text-white"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="text-white">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full p-3 mt-2 rounded-md bg-gray-700 text-white"
                    required
                />
            </div>
            <button type="submit" className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition duration-300">
                Send Message
            </button>
        </form>
    );
};

const ContactPage = () => {
    return (
        <div className="bg-gray-900 text-white sm:mt-20 mt-16">
            {/* Header Section */}
            <section className="py-16 text-center bg-gray-800">
                <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
                <p className="text-lg mb-6">We’d love to hear from you! Whether you have questions, need support, or want to learn more, feel free to reach out to us.</p>
            </section>

            {/* Contact Form Section */}
            <section className="py-16 px-8 bg-gray-900">
                <div className="container mx-auto max-w-3xl">
                    <ContactForm />
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="py-16 px-8 bg-gray-800 text-center">
                <h2 className="text-3xl font-extrabold mb-6">Our Contact Information</h2>
                <p className="text-lg text-gray-400 mb-2">Phone: (123) 456-7890</p>
                <p className="text-lg text-gray-400 mb-2">Email: contact@yourdomain.com</p>
                <p className="text-lg text-gray-400 mb-6">Address: 1234 Security Street, Suite 100, Your City</p>
                <div className="flex justify-center gap-8">
                    <a href="#" className="text-blue-500">Facebook</a>
                    <a href="#" className="text-blue-500">Twitter</a>
                    <a href="#" className="text-blue-500">Instagram</a>
                </div>
            </section>

            {/* Map Section (Optional) */}
            <section className="py-16 px-8 bg-gray-900">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-extrabold text-center text-white mb-4">Find Us</h2>
                    {/* Embed a Google Map or use a library like React Google Maps */}
                    <div className="h-64 bg-gray-700 rounded-lg shadow-lg">
                        {/* You can embed Google Map or use a map component here */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_EMBED_LINK"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;

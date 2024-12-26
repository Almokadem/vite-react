const Contact = () => {
    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-gray-200 mb-12">Contact Us</h2>
                <form className="max-w-lg mx-auto">
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-4 rounded-lg bg-gray-800 text-white border-2 border-gray-600 focus:outline-none focus:border-blue-600"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-4 rounded-lg bg-gray-800 text-white border-2 border-gray-600 focus:outline-none focus:border-blue-600"
                        />
                    </div>
                    <div className="mb-6">
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-4 rounded-lg bg-gray-800 text-white border-2 border-gray-600 focus:outline-none focus:border-blue-600"
                        />
                    </div>
                    <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
                        Send Message
                    </button>
                </form>
            </div>
        </section>

    )
}

export default Contact
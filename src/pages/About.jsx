/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

// Team Member Card Component
const TeamMember = ({ name, title, image, bio }) => (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4" />
        <h3 className="text-2xl text-white font-semibold">{name}</h3>
        <p className="text-lg text-gray-400">{title}</p>
        <p className="text-gray-300 mt-2">{bio}</p>
    </div>
);

const AboutPage = () => {
    return (
        <div className="text-white bg-gray-900 relative sm:mt-20 mt-16">
            <section className="py-16 bg-gray-800 text-center px-5">
                <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
                <p className="text-lg mb-6">We are a team of professionals dedicated to providing top-notch security solutions for homes and businesses. Our mission is to keep you safe, no matter where you are.</p>
            </section>

            <section className="py-16 px-8 bg-gray-900">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-extrabold mb-6">Our Mission</h2>
                    <p className="text-lg text-gray-400">
                        Our mission is to provide advanced and reliable security solutions to protect what matters most. We leverage cutting-edge technology to ensure you have peace of mind wherever you go.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-gray-800 text-center">
                <h2 className="text-3xl font-extrabold mb-6">Meet The Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <TeamMember
                        name="John Doe"
                        title="Founder & CEO"
                        image="/path/to/john-image.jpg"
                        bio="John has over 20 years of experience in the security industry and is passionate about creating innovative solutions for modern security needs."
                    />
                    <TeamMember
                        name="Jane Smith"
                        title="Lead Engineer"
                        image="/path/to/jane-image.jpg"
                        bio="Jane is the mastermind behind our security system's design. Her expertise in IoT and security technologies helps us stay ahead of the competition."
                    />
                    <TeamMember
                        name="Mike Johnson"
                        title="Customer Support Manager"
                        image="/path/to/mike-image.jpg"
                        bio="Mike is dedicated to ensuring our customers have the best possible experience. He leads our support team and resolves any issues with care and professionalism."
                    />
                </div>
            </section>

            <section className="py-16 px-8 bg-gray-900 text-center">
                <h2 className="text-3xl font-extrabold mb-6">Why Choose Us?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Advanced Technology</h3>
                        <p className="text-gray-400">We use the latest in security technology to ensure the highest level of protection for your home or business.</p>
                    </div>
                    <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
                        <p className="text-gray-400">Our dedicated support team is available around the clock to assist you with any questions or issues you may have.</p>
                    </div>
                    <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Custom Solutions</h3>
                        <p className="text-gray-400">We offer personalized solutions to fit the unique needs of your home or business security system.</p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-800 text-center">
                <h2 className="text-3xl font-extrabold mb-6">Our Achievements</h2>
                <div className="container mx-auto text-lg text-gray-400">
                    <p>We’ve been recognized for our excellence in the industry, with awards and certifications that reflect our commitment to quality and security.</p>
                </div>
            </section>

            <section className="py-16 bg-gray-900 text-center">
                <h2 className="text-3xl font-extrabold mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-400 mb-6">Interested in learning more? Feel free to reach out to us for any questions or requests. We're here to help!</p>
                <button className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300">
                    Contact Us
                </button>
            </section>
        </div>
    );
};

export default AboutPage;

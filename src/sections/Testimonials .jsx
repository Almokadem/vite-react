import TestimonialCard from "../components/TestimonialCard ";
const Testimonials = () => {
    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-gray-200 mb-12">What Our Customers Say</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <TestimonialCard
                        name="John Doe"
                        role="Business Owner"
                        text="This security system has been a game-changer for our store. We feel so much safer!"
                    />
                    <TestimonialCard
                        name="Jane Smith"
                        role="Homeowner"
                        text="I love being able to monitor my house from anywhere. The app is super easy to use."
                    />
                    <TestimonialCard
                        name="Mike Johnson"
                        role="Security Expert"
                        text="Top-tier technology that rivals the best security companies out there."
                    />
                </div>
            </div>
        </section>

    )
}

export default Testimonials 
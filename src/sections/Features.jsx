import FeatureCard from '../components/FeatureCard';
const Features = () => {
    return (
        <section className="py-20 bg-gray-800 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-gray-200 mb-12">Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <FeatureCard icon="🔒" title="Secure" description="Top-notch encryption to keep your data safe." />
                    <FeatureCard icon="📱" title="Mobile App" description="Control everything from your phone anywhere." />
                    <FeatureCard icon="💡" title="Smart Lights" description="Automated lighting for enhanced security." />
                    <FeatureCard icon="🚨" title="Real-Time Alerts" description="Receive instant notifications about suspicious activities." />
                </div>
            </div>
        </section>

    )
}

export default Features
import PricingCard from '../components/PricingCard ';
const Pricing = () => {
    return (
        <section className="py-20 bg-gray-800 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-gray-200 mb-12">Pricing Plans</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <PricingCard
                        title="Basic Plan"
                        price="$29/month"
                        features={["Basic Security", "Mobile App", "Email Alerts"]}
                        cta="Get Started"
                    />
                    <PricingCard
                        title="Standard Plan"
                        price="$49/month"
                        features={["Advanced Security", "24/7 Support", "Smart Home Integration"]}
                        cta="Get Started"
                    />
                    <PricingCard
                        title="Premium Plan"
                        price="$79/month"
                        features={["Full Surveillance", "Priority Support", "Custom Alerts"]}
                        cta="Get Started"
                    />
                </div>
            </div>
        </section>

    )
}

export default Pricing 
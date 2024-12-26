/* eslint-disable react/prop-types */
const PricingCard = ({ title, price, features, cta }) => (
    <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-xl font-bold mb-6">{price}</p>
        <ul className="text-lg mb-6">
            {features.map((feature, index) => (
                <li key={index} className="mb-2">{feature}</li>
            ))}
        </ul>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">{cta}</button>
    </div>
);
export default PricingCard;
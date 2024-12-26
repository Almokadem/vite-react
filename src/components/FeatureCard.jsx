/* eslint-disable react/prop-types */
const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-lg text-gray-400">{description}</p>
    </div>
);
export default FeatureCard;
/* eslint-disable react/prop-types */
const TestimonialCard = ({ name, role, text }) => (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 max-w-sm">
        <p className="text-lg text-gray-400 mb-4">`{text}`</p>
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
    </div>
);
export default TestimonialCard;
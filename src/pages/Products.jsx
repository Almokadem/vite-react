/* eslint-disable react/prop-types */
// Product Card Component
const ProductCard = ({ name, image, price, description }) => (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <img src={image} alt={name} className="w-full h-64 object-cover rounded-t-md" />
        <h3 className="text-2xl text-white font-semibold mt-4">{name}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
            <span className="text-lg text-white">{price}</span>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                View Details
            </button>
        </div>
    </div>
);

const ProductsPage = () => {
    // Sample data for products
    const products = [
        {
            name: 'Security Camera',
            image: '/download.jpeg',
            price: '$99.99',
            description: 'High-definition security camera with night vision and motion detection.',
        },
        {
            name: 'Motion Sensor',
            image: '/OIP.jpeg',
            price: '$49.99',
            description: 'Advanced motion sensor with smart connectivity.',
        },
        {
            name: 'Smart Lock',
            image: '/smart_lock.jpeg',
            price: '$129.99',
            description: 'Remote-controlled smart lock for added security.',
        },
    ];

    return (
        <div className="bg-gray-900 text-white sm:mt-20 mt-16">
            {/* Header Section */}
            <section className="py-16 text-center bg-gray-800">
                <h1 className="text-4xl font-extrabold mb-4">Our Products</h1>
                <p className="text-lg mb-6">Browse our range of advanced security solutions designed to protect your home and business.</p>
            </section>

            {/* Product Grid Section */}
            <section className="py-16 px-8 bg-gray-900">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            name={product.name}
                            image={product.image}
                            price={product.price}
                            description={product.description}
                        />
                    ))}
                </div>
            </section>

            {/* Product Categories Section (Optional) */}
            <section className="py-16 px-8 bg-gray-800 text-center">
                <h2 className="text-3xl font-extrabold mb-6">Product Categories</h2>
                <div className="flex justify-center gap-8">
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                        Home Security
                    </button>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                        Business Security
                    </button>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                        Accessories
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ProductsPage;

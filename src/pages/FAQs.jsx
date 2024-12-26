/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from 'react';

// Accordion Item Component
const AccordionItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-gray-600 mb-4">
            <button
                onClick={toggleAnswer}
                className="w-full text-left p-4 text-xl font-semibold text-white bg-gray-800 hover:bg-gray-700 focus:outline-none"
            >
                {question}
            </button>
            {isOpen && (
                <div className="p-4 text-lg text-gray-300 bg-gray-900">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

const FaqsPage = () => {
    const faqs = [
        {
            question: "What is your return policy?",
            answer: "You can return your items within 30 days of purchase for a full refund.",
        },
        {
            question: "How long does shipping take?",
            answer: "Standard shipping takes 5-7 business days. Expedited shipping options are available.",
        },
        {
            question: "Do you ship internationally?",
            answer: "Yes, we offer international shipping to many countries. Please check our shipping policy for more details.",
        },
        {
            question: "Can I track my order?",
            answer: "Yes, once your order has shipped, you will receive a tracking number via email.",
        },
        {
            question: "How do I reset my password?",
            answer: "To reset your password, click on 'Forgot Password' on the login page and follow the instructions.",
        },
    ];

    return (
        <div className="bg-gray-900 text-white sm:mt-20 mt-16">
            {/* Header Section */}
            <section className="py-16 text-center bg-gray-800">
                <h1 className="text-4xl font-extrabold mb-4">Frequently Asked Questions</h1>
                <p className="text-lg text-gray-400 mb-6">Find answers to some of our most commonly asked questions below. If you can't find what you're looking for, feel free to <a href="/contact" className="text-blue-500">contact us</a>.</p>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-8 bg-gray-900">
                <div className="container mx-auto max-w-3xl">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </section>

            {/* Optional Search Bar */}
            <section className="py-8 px-8 bg-gray-900">
                <div className="container mx-auto max-w-3xl">
                    <input
                        type="text"
                        placeholder="Search FAQs"
                        className="w-full p-4 text-lg text-gray-800 bg-white rounded-md shadow-md"
                    />
                </div>
            </section>
        </div>
    );
};

export default FaqsPage;

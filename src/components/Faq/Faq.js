// FAQ.js
import React, { useState } from 'react';

const FAQ = () => {
    const faqs = [
        {
            title: "What is a hackathon?",
            content: `A hackathon, also known as a codefest, is a social coding event that brings computer programmers and other interested people together to improve upon or build a new software program.`,
        },
        {
            title: "What is in for me?",
            content: "Learning new skills, look good on your resume, networking, winning swags & cash prizes, working as a team, meet great people and having fun.",
        },
        {
            title: "Is there any registration fee?",
            content: `No, It’s absolutely free of cost.`,
        },
        {
            title: "Is it online or offline?",
            content: `The Hackathon is online (6 - 8 October 2023).`,
        },
        {
            title: "How will the event be judged?",
            content: `The projects will be judged based on a variety of criteria, including originality, feasibility, market potential, and presentation.`,
        },
        {
            title: "Any other questions?",
            content: `If there is something that is still not clear or we didn’t cover please contact us at phicsit.community@gmail.com`,
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-8 bg-black bg-opacity-50 rounded-lg shadow-lg text-white">
            {faqs.map((faq, index) => (
                <div key={index} className="bg-black bg-opacity-50 rounded-lg shadow-md p-6 border border-blue-500">
                    <button onClick={() => handleClick(index)} className="text-lg font-semibold w-full text-left text-blue-300">
                        {faq.title}
                    </button>
                    {activeIndex === index && <p className="mt-2 text-gray-300">{faq.content}</p>}
                </div>
            ))}
        </div>
    );
};

export default FAQ;
import Image from 'next/image'
import React, { useState } from 'react'
// import dropdown from '../public/dropdown.png'
import faq from '../public/faq.svg'

const faqList = [
    {
        question: 'How does agropharma differ from traditional agriculture?',
        answer: 'Agropharma incorporates advanced technologies, such as genetic engineering and precision farming, to optimize plant growth, improve nutrient uptake, and mitigate environmental impact.',
        image: "/faq.svg"
    },
    {
        question: 'What are the key benefits of agropharma products?',
        answer: 'Agropharma products can lead to increased crop productivity, improved crop resilience, reduced need for chemical inputs, and sustainable agricultural practices.',
        image: "/faq2.png"
    },
    {
        question: 'Are agropharma products compatible with organic farming?',
        answer: 'Some agropharma products are compatible with organic farming practices, but it depends on the specific product and its ingredients. Always check for certifications and consult with experts.',
        image: "/faq3.png"
    },
    {
        question: 'Are agropharma products regulated?',
        answer: 'Yes, agropharma products are subject to strict regulatory oversight to ensure their safety and efficacy. Regulatory bodies vary by country, and adherence to guidelines is essential for product development and usage.',
        image: "/faq4.png",
    }
]

const FAQ = () => {
    const [question, setQuestion] = useState(0);
    return (


        <div id="faq" className='flex  flex-col lg:flex-row  justify-center pb-[4rem]'>
            <div className="basis-3/5 mx-4 my-5 ms-5 p-4">
                <div className="my-3">
                    <div className="text-2xl text-green-700 font-semibold">FAQ</div>
                    <div className="text-3xl mt-2 mb-4 text-gray-700 font-semibold">Frequently Asked <span className='text-green-700 italic'>Questions</span>  </div>
                </div>
                <div className='w-full mt-8'>
                    {faqList.map((item, index) => {
                        return (
                            <div key={index} onClick={() => {
                                if (question !== index) {
                                    setQuestion(index)
                                }
                            }} className='bg-[#F8F5F5] py-[1rem] px-[1.5rem] rounded-lg mt-3 cursor-pointer'>


                                <div className='flex justify-between items-center transition-all duration-300 ease-in-out'>
                                    <span className='text-[#2C2C2C] text-[1.25rem]'>{item.question}</span>
                                    <span>    {
                                        question === index ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="3" viewBox="0 0 16 3" fill="none" className='cursor-pointer'>
                                                <path d="M16 2.73119H12.609H9.21767L6.10833 2.73116L0 2.73119V0.000121117H6.10833L9.21767 0L16 0.000121117V2.73119Z" fill="black" />
                                            </svg>
                                        ) : (
                                            <svg onClick={() => { setQuestion(index) }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className='cursor-pointer' fill="none">
                                                <path d="M16 9.22366H9.21767V16H6.10833V9.22366H0V6.80783H6.10833V0H9.21767V6.80783H16V9.22366Z" fill="#2C2C2C" />
                                            </svg>
                                        )
                                    }</span>


                                </div>
                                {question === index && <div className='text-[#036B46] text-[1.15rem] mt-3 font-thin'>{item.answer}</div>}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="basis-2/5">
                <Image
                    src={question >= 0 ? faqList[question]?.image : "/faq.svg"}
                    className="w-full h-[22rem]  md:h-full object-cover" width={500} height={500}
                    alt=''
                />
            </div>

        </div>
    )
}

export default FAQ

import Image from 'next/image'
import React from 'react'
import image1 from '../public/image1.svg'
import image2 from '../public/image2.svg'
import image3 from '../public/image3.svg'

const AboutPage = () => {
    return (
        <div className='flex  w-100 flex-col md:flex-row gap-4 m-4
         py-3 justify-center items-center'>
            <div className="basis-2/6 flex-col justify-center items-center p-4">
                <div className="">
                    <div className="">
                        <Image src={image1} alt="Picture of the author" width={500} style={{ borderRadius: '2%' }} height={500} />
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="m-3   rounded-md"><Image src={image2} alt="Picture of the author" width={500} height={500} style={{ borderRadius: '2%' }} /></div>
                    <div className="m-3 mt-5 rounded-md"><Image src={image3} alt="Picture of the author" width={500} style={{ borderRadius: '2%' }} height={500} /></div>
                </div>


            </div>
            <div className="basis-3/6">
                <div className='mb-2 text-2xl text-green-700'>ABOUT US</div>
                <div className=' mb-2 font-bold text-3xl text-gray-700'> &quot;Empowering agriculture with precision and innovation,<span className='text-green-700 italic '> Agrity Crop Science </span>pioneers sustainable growth for a flourishing tomorrow.&quot;</div>

                <div className='text-xl text-gray-600'>&quot;Welcome to Agrity Crop Science, a pioneering force in agropharma. At the intersection of agriculture and pharmaceutical innovation, we cultivate sustainable growth for farmers worldwide. Our commitment to excellence, cutting-edge solutions, and a passion for greener futures define us as leaders in agropharma, nurturing the roots of prosperity in every field we touch.&quot;</div>
            </div>
        </div>
    )
}

export default AboutPage

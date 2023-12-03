import React from 'react'
import Image from 'next/image'
import iconlocation from '../public/iconlocation.svg'
import iconmess from '../public/iconmess.svg'
import iconphone from '../public/iconphone.svg'
import footer from '../public/footer.png'
import iconinsta from '../public/iconinsta.svg'
import iconface from '../public/iconface.svg'
import iconwhat from '../public/iconwhat.svg'
import iconlink from '../public/iconlink.svg'
import iso from '../public/iso.svg'
import google from '../public/google.svg'
import starone from '../public/starone.svg'
import startwo from '../public/startwo.svg'

const Footer = () => {
    return (
        <div className='mt-3  text-white'>

            <div style={{
                backgroundImage: `url('/footer.png')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }} className='pt-10 p-5 min-h-[90vh]' >
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4 "

                >
                    <div className="col-span-2   flex  flex-row  ">
                        <div className="basis-1/2">
                            <Image src={'/footer-logo.png'} alt="iconlocation" width={250} height={250} className='ml-[2rem]' />
                            <div className="ml-8 mt-1">
                                Where Innovation Meets<br/> Growth.
                            </div>
                            <div className="flex gap-5 justify-center items-center ml-[-5rem] mt-[4rem] scale-[135%]">
                                <Image src={iso} alt="iconlocation" width={90} height={20} />
                                <div className="">
                                    <div className="">
                                        <Image src={google} alt="alt" width={105} height={20} />
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="">Review</div>
                                        <div className="flex ">
                                            <Image src={starone} alt="iconlocation" width={15} height={20} />
                                            <Image src={starone} alt="iconlocation" width={15} height={20} />
                                            <Image src={starone} alt="iconlocation" width={15} height={20} />
                                            <Image src={starone} alt="iconlocation" width={15} height={20} />
                                            <Image src={starone} alt="iconlocation" width={15} height={20} />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-col  mx-auto  gap-3 scale-110 mt-5">
                            <div className="font-semibold text-xl">Navigation</div>
                            <div className="">Home</div>
                            <div className="">About Us</div>
                            <div className="">Our Products</div>
                            <div className="">Why Choose Us</div>
                            <div className="">FAQ</div>

                        </div>
                    </div>


                    <div className="flex flex-col gap-5">


                        <div className="flex flex-col gap-3 w-[75%] scale-[110%] mt-3">
                            <div className="font-semibold text-lg mb-1">Contact us</div>
                            <div className=" flex  gap-2 mb-2 ">
                                <Image src={iconphone} alt="iconlocation" width={140} height={20} />
                            </div>
                            <div className=" flex  gap-2 ">

                                <Image src={iconmess} alt="iconlocation" width={25} height={20} />
                                <div className="">agritycropscience@gmail.com</div>
                            </div> <div className=" flex items-start  gap-2 ">

                                <Image src={iconlocation} alt="iconlocation" width={25} height={20} />
                                <div className="">Revenue Survey No. 916/1,
                                    Plot No. 6, Millennium Park-2,
                                    At. Navagadh (Guj.)</div>
                            </div>


                        </div>
                        <div className="flex flex-col gap-2 basis-1/2 mt-7 scale-110">
                            <div className=" font-semibold ">We are available on</div>
                            <div className="flex gap-3 scale-110 ml-[1.25rem]">
                                <Image src={iconinsta} alt="iconlocation" width={25} height={20} />
                                <Image src={iconface} alt="iconlocation" width={25} height={20} />
                                <Image src={iconwhat} alt="iconlocation" width={25} height={20} />
                                <Image src={iconlink} alt="iconlocation" width={25} height={20} />
                            </div>
                            <div className="mt-4">Working Hours</div>
                            <div className="">Monday to Saturday 09:30 AM To 07:00 PM</div>
                        </div>
                    </div>



                </div>
            </div>


            <div className="flex justify-center items-center text-black py-2">Agrity Crop Science ©2015-23 | All Rights Reserved</div>

        </div>
    )
}

export default Footer

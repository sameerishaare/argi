import Image from 'next/image';
import React, { use, useEffect } from 'react'

const Loader = () => {
    const [height, setHeight] = React.useState('120vh');
    const [show, setShow] = React.useState(true);
    useEffect(() => {
        let timer1 = setTimeout(() => {
            setHeight('0%');
            setShow(false);
        }
        , 4950)
        return () => {
            clearTimeout(timer1);
        }
    }, []);
  return (
    <>
    {show ? <div className={`fixed top-0 h-[110vh] w-[100vw] bg-[#FFF] z-[500] transition-all duration-300 ease-in-out flex flex-col justify-center items-center pt-[8rem]`}>
        <Image src="/Loader.png" alt="Loader" height={275} width={275} />
        <div className='w-full flex justify-center items-center mt-12'>
            <h1 className="text-[#007947] text-[2.5rem] font-normal space-x-[0.0625rem] taviraj">Better Environment</h1>
            <h1 className="text-[#000] text-[2.5rem] font-normal space-x-[0.0625rem] taviraj">, Better Tomorrow</h1>
        </div>
        <span className="loader"></span>
    </div> : (<></>)}
    </>
  )
}

export default Loader
import React from 'react';
import ContactPic from '../../Photo/ContactUs.svg'

const ContactUs = () => {
    return (
        <div className='bg-[black] py-28'>
            <h1 className='text-center text-4xl text-white mb-20 font-semibold'> Contact Us</h1>
            <div className='flex container flex-col lg:flex-row gap-10 mx-auto items-center justify-between'>
                <img className='lg:w-1/2 lg:mb-0 mb-12' src={ContactPic} alt="" />
                <div className='border bg-slate-900 rounded px-6 py-12'>
                    <form >
                        <input className='w-full mb-5' type="text" placeholder='Your Name' />
                        <input className='w-full mb-5' type="text" placeholder='Your Email'/>
                        <textarea className='w-full resize-none mb-5' placeholder='Your Message'  rows="7"></textarea>
                        <input className='bg-blue-600 px-9 py-2 text-gray-200 rounded font-semibold' type="submit" value='Send'/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
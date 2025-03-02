import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Social = () => {
    return (
        <div className='grid w-fit mx-auto md:mx-0 lg:mx-auto text-center my-5 md:text-left'>
            <h2 className='footer-title'>Social links</h2>
            <div className='flex gap-5 text-2xl justify-center'>
                <a href="https://www.facebook.com" target='_blank'><FaFacebook className='hover:text-orange-600 transition-all duration-300 cursor-pointer hover:scale-125'/></a>
                <a href="https://www.x.com" target='_blank'><FaTwitter className='hover:text-orange-600 transition-all duration-300 cursor-pointer hover:scale-125'/></a>
                <a href="https://www.instagram.com" target='_blank'><FaInstagram className='hover:text-orange-600 transition-all duration-300 cursor-pointer hover:scale-125'/></a>
                <a href="https://www.linkedin.com" target='_blank'><FaLinkedin className='hover:text-orange-600 transition-all duration-300 cursor-pointer hover:scale-125'/></a>
            </div>
        </div>
    );
};

export default Social;
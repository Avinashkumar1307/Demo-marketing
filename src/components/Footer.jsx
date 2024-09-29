import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoFacebook, IoLogoTwitter } from "react-icons/io";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
// import footer from '../assets/footerimage.png';
import footer from '../assets/image2.png';
export default function Footer() {
    return (
        <>
            <div className='h-full w-full flex items-end'>
                <img src={footer} className='w-full h-[300px]' alt="Footer Background" />
            </div>
            <div className='w-full bg-primary bg-right-top bg-no-repeat bg-contain'>
                <div className="flex items-center">
                    <Link to="/" className="flex items-center ml-4 mt-5">
                        {/* Uncomment and add src to images when available */}
                        {/* <img src={before} alt="Logo" loading="lazy" width="100px" className='mr-2' /> */}
                        {/* <img src={sadhna} alt="sadhana" loading="lazy" width="150px" /> */}
                    </Link>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-4 p-4">
                    <div className="p-4">
                        <p className='text-2xl font-bold'>Contact Us</p>
                        <p className='text-xl text-[#3C3C3C]'>Located -</p>
                        <p className='text-xl text-[#3C3C3C]'>270-272 Bath Road, London</p>
                        <p className='text-xl text-[#3C3C3C]'>Email -</p>
                        <p className='text-xl text-[#3C3C3C]'>connect@Team.org</p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.4201671565993!2d-0.27716509999999994!3d51.4688015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760fe8c538a443%3A0xde82f27f2197fdd3!2sTeam!5e0!3m2!1sen!2sin!4v1717079952803!5m2!1sen!2sin"
                            width="300"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Team Location"
                        ></iframe>
                    </div>
                    <div className="p-4">
                        <p className='text-2xl font-bold'>About</p>
                        <p className='text-xl text-[#3C3C3C] mt-2'>
                            <Link to='#'>Products</Link>
                        </p>
                        <p className='text-xl text-[#3C3C3C] mt-2'>
                            <Link to='#'>Works</Link>
                        </p>
                        <p className='text-xl text-[#3C3C3C] mt-2'>
                            <Link to='#'>Contacts</Link>
                        </p>
                    </div>
                    <div className="p-4">
                        <p className='text-2xl font-bold'>Navigation</p>
                        <p className='text-xl text-[#3C3C3C] mt-2'>
                            <Link to='#'>Home</Link>
                        </p>
                        <p className='text-xl text-[#3C3C3C] mt-2'>
                            <Link to='#'>Works</Link>
                        </p>
                        <p className='text-xl text-[#3C3C3C] mt-2'>
                            <Link to='#'>Contacts</Link>
                        </p>
                        <p className='text-xl text-[#3C3C3C] mt-2'>
                            <Link to='#'>About</Link>
                        </p>
                        <p className='text-xl text-[#3C3C3C] mt-2'>
                            <Link to='#'>Area</Link>
                        </p>
                    </div>
                    <div className="p-4">
                        <p className='text-2xl font-bold'>Social</p>
                        <p className='text-xl mt-2 flex gap-1 items-center'>
                            <IoLogoFacebook />
                            <Link to='#' className='text-[#3C3C3C]'>Facebook</Link>
                        </p>
                        <p className='text-xl mt-2 flex gap-1 items-center'>
                            <IoLogoTwitter />
                            <Link to='#' className='text-[#3C3C3C]'>Twitter</Link>
                        </p>

                        <p className='text-xl mt-2 flex gap-1 items-center'>
                            <FaLinkedin />
                            <Link to='#' className='text-[#3C3C3C]'>LinkedIn</Link>
                        </p>
                        <p className='text-xl mt-2 flex gap-1 items-center'>
                            <FaInstagramSquare />
                            <Link to='#' className='text-[#3C3C3C]'>Instagram</Link>
                        </p>
                        <p className='text-xl mt-2 flex gap-1 items-center'>
                            <FaInstagramSquare />
                            <Link to='#' className='text-[#3C3C3C]'>Instagram</Link>
                        </p>
                    </div>
                </div>
                <div className='w-full h-[1px] bg-white'></div>
                <div className='grid grid-cols-3 px-4 py-4 text-center text-white text-lg'>
                    <div>Copyright 2024 All rights reserved</div>
                    <div>Terms & Conditions</div>
                    <div>Privacy Policy</div>
                </div>
            </div>
        </>
    );
}

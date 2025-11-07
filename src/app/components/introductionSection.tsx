/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { Animation } from './animation';
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';


const Introduction = () => {
	return (
		<section>
			<div className='grid grid-cols-1 sm:grid-cols-12'>
				<div className='col-span-7 place-self-center text-center sm:text-left'>
					<h1 className='text-white mb-4 text-4xl sm:text-4xl lg:text-5xl font-extrabold'>
                        <span className='relative'>
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-800'>
                                Hello, I'm{" "}
                            </span>
                            <br/>
                            <Animation/>
                        </span>
					</h1>
					<p className='text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl'>
						Dev Junior
					</p>
					<div>
						<button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-500  hover:bg-slate-200 text-white mt-3 '>
							<span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>More about me</span>
						</button>
					</div>
				</div>
				<div className='col-span-5 place-self-center mt-4 lg:mt-0'>
					<div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]  relative'>
						<Image
							src='../../public/image/DB3A3114.jpg'
							alt='Ivandro IV'
							className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
							width={350}
							height={350}
						/>
					</div>
				</div>
			</div>

			<div className='mt-0 ms-48 flex space-x-4'>
				<a href='https://linkedin.com/in/ivandro-alfredo' target='_blank' rel='noopener noreferrer' className='text-white text-4xl hover:text-blue-400 transform hover:scale-110 transition-transform duration-300 ease-in-out'>
				<FaLinkedin />
				</a>
				<a href='https://github.com/Ivandro-Alfredo/' target='_blank' rel='noopener noreferrer' className='text-white text-4xl hover:text-purple-400 transform hover:scale-110 transition-transform duration-300 ease-in-out'>
				<FaGithub />
				</a>
				<a href='#' target='_blank' rel='noopener noreferrer' className='text-white text-4xl hover:text-pink-400 transform hover:scale-110 transition-transform duration-300 ease-in-out'>
				<FaGlobe />
				</a>
			</div>
		</section>
	);
};

export default Introduction;

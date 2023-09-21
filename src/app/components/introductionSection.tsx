/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { Animation } from './animation';

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
						<button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-500  hover:bg-slate-200 text-white'>
							{' '}
							Hire me
						</button>
						<button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-500  hover:bg-slate-200 text-white mt-3 '>
							<span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
						</button>
					</div>
				</div>
				<div className='col-span-5 place-self-center mt-4 lg:mt-0'>
					<div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]  relative'>
						<Image
							src='/image/iv-dev.jpeg'
							alt='Ivandro IV'
							className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
							width={200}
							height={200}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Introduction;

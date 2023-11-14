import React from 'react';
import LoopGif from '../assets/img/loop.gif';

const AboutSection = () => {
 return (
		<div className='w-full py-8 md:py-16 px-4 bg-black text-white'>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-4 md:flex md:items-center'>
				<img className='w-full md:col-span-1 mx-auto my-4 md:my-0' src={LoopGif} alt='/loop' />
				<div className='md:col-span-3 flex flex-col justify-center'>

					<p className='text-[#00df9a] text-xl font-extrabold'>#WhoAreWe?</p>
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 mb-2 md:mb-3'>ABOUT US</h1>

					<p className='text-lg text-justify mb-2'>
						<span className='text-[#00df9a] font-extrabold'>Soft CodeHack 3.0</span> is an exciting and inspiring event, brought to you by the <span className='text-[#00df9a] font-extrabold'>PHICSIT</span> community. Our goal is to bring together individuals with a passion for technology, engineering, and sustainability, to collaborate and create innovative solutions that have the potential to make a real difference in the world.
					</p>
					
					<p className='text-lg text-justify mb-2'>
						We believe that collaboration and inclusivity are the keys to unlocking creativity and innovation, which is why we're committed to providing a welcoming and supportive environment for all participants. Whether you're an experienced developer or just starting out, whether you come from a technical background or not, you'll find a place at <span className='text-[#00df9a]'>Soft CodeHack 3.0</span>.
					</p>

					<p className='text-lg text-justify mb-2'>
						During the event, you'll have access to cutting-edge tools, resources, and mentors who will help you develop your ideas and bring them to life. You'll work alongside other like-minded individuals, and have the opportunity to learn new skills, build your network, and make a positive impact on the world.
					</p>

					<p className='text-lg text-justify mb-1'>
						If you're passionate about technology, engineering, and sustainability, and you want to be part of a collaborative and inclusive community working towards a better world, then <span className='text-[#00df9a]'>Soft CodeHack 3.0</span> is the event for you. Join us and let's hack our way to a brighter future together!
					</p>
					
					<button className='bg-white text-[#000000] w-full md:w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Know More</button>
				</div>
			</div>
		</div>
    );
};

export default AboutSection;
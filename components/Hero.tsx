import Link from 'next/link';

import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {};

const Hero = (props: Props) => {
  const [text, setText] = useTypewriter({
    words: [
      "Hi, the name's Corey",
      'Guy who loves donuts',
      '<Buttlovesbuttstufftoo />',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src='https://cdn.sanity.io/images/ltuexkre/production/a766c574c295f2103c63c2dfdf675557c664d016-600x600.png'
        alt=''
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Software Engineer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div className='pt-5'>
          <Link href='#About'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#Experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#Skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#Projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

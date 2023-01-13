import { motion } from 'framer-motion';

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://cdn.sanity.io/image/ltuexkre/production/050ee674d199aa8d254af2b5ea480d3dc320cbb1-1240x1440.png'
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>CEO of your mom</h4>
        <p className='font-bold text-2xl mt-1'>MY BALLS</p>
        <div className='flex space-x-2 my-2'>
          <img
            className='h-10 w-10 rounded-full'
            src='https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png'
          />
          {/* <TechUsed />
        <TechUsed />
        <TechUsed /> */}
        </div>
        <p className='uppercase py-5 text-gray-300'>Starter work...-Ended...</p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summyary</li>
          <li>Summyary</li>
          <li>Summyary</li>
          <li>Summyary</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;

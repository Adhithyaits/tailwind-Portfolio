import AboutImag from '../assets/about.png';

export const About = () => {
  return (
     <section id='about' className='flex flex-col md:flex-row
     bg-secondary px-5 h-full'>
        <div className='md:w-1/2 py-5'> 
        <img src={AboutImag} />
        </div>

        <div className=' md:w-1/2 flex justify-center  text-white'>
           <div className='flex flex-col justify-center'>
            <h1 className='text-4xl  font-bold border-b-4 mb-5 w-[170px] border-blue-600'>About Me</h1>
            
             <p className='pb-5'>Hi, Im Adhithya C Im a react Developer . I built beautiful Websites With React.js and Tailwind CSS and many more</p>
             <p className='pb-5'>I am proficient in Frontend skills like React.js Redux Tool Kit ,Axios ,Tailwind CSS,SASS,CSS and many more</p>
            </div>
         
        </div>

     </section>
  )
}
import resumeImag from '../assets/resume.jpg';

export const Resume = () => {
  return (
     <section id='resume' className='flex flex-col md:flex-row
     bg-secondary px-5 h-full'>
        <div className='md:w-1/2 py-5 flex justify-center md:justify-end'> 
        <img className='w-[300px]' src={resumeImag} />
        </div>

        <div className=' md:w-1/2 flex justify-center  text-white'>
           <div className='flex flex-col justify-center'>
            <h1 className='text-4xl  font-bold border-b-4 mb-5 w-[150px] border-blue-600'>Resume</h1>
            
             <p className='pb-5'>You can view my resume <a className='btn' href="https://drive.google.com/file/d/1GtDgbhy4lR96zc5wj6TNrjzK6DWgWKZ-/view?usp=drive_link">Download</a></p>

            </div>
         
        </div>

     </section>
  )
}  

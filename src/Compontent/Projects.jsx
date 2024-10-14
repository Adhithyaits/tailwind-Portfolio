import websiteImg1 from '../assets/website-blog.jpg';
import websiteImg2 from '../assets/ecommerce-websites.jpg';
import websiteImg3 from '../assets/food-ecommerce.jpg';
export const Projects = () => {


  const config ={
    projects: [

      {
        image:websiteImg1,
        description :' A Image Download Websites . Built with html,css, javascript' ,
        link:'https://adhithyaits.github.io/Impics/retail_1.html'
      },
      {
        image:websiteImg2,
        description :' A Ecommerce websites Websites . Built with html,css, javascript' ,
        link:'https://adhithyaits.github.io/Ecommerce-Redstore/Home.html'
      },
      {
        image:websiteImg3,
        description :'  A fruits Websites . Built with html,css, javascript' ,
        link:'https://adhithyaits.github.io/fruits/fruits.html',
      }
    ]
  }

  return (
        <section id='projects' className='flex flex-col py-20 px-5 justify-center bg-primary'>
            <div className='w-full'>
                <div className='flex flex-col text-white px-10 py-5'>
                    <h1  className=' text-4xl font-bold border-b-4 mb-5 w-[170px] border-blue-600'>Projects</h1>
                    <p >These are some of my best projects. I have built these with html, bootstrap, javascript check them out </p>
                </div>
            </div>
            <div className='w-full'>
              <div className='flex  px-10 gap-5 flex-col md:flex-row justify-center'>
                   { config.projects.map((project)=> (  <div className='relative '>  
                     <img className='h-[200px] w-[400px]' src={project.image} alt="" />
                       <div className='project-description'><p className='text-center py-5 px-5'>{project.description}</p>
                       <div className='flex justify-center'>
                        <a className='btn' target='_blank' href={project.link}>View Project</a>
                      </div>
                      </div>
                    
                  </div>
                  ) )}
                
                
                
                  
             
              </div>
            </div>
        </section>
  )
}

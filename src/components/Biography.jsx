import viggo from '../assets/viggo2.jpg'
import resume from '../assets/Viggo Julies CV.pdf'

function Biography() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 px-6 md:px-16 py-10'>

      <div className='md:w-96 w-full'>
        <p className='text-base md:text-lg'>
          I am a creative and driven individual with a strong passion for programming, AI, and technology in general.
          Over the past few years as a junior software/web developer, I have worked on a number of diverse projects like a management system, a JavaScript-based product search bar, etc.
        </p>

        <p className='mt-4 text-base md:text-lg'>
          I love turning ideas into functional and engaging experiences, whether it's work related or just in my personal life.
          I bring both technical and imaginative thinking to everything I do.
        </p>

        <button className='bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 ring-2 ring-purple-400 text-lg mt-6 ml-28'>
          <a href={resume} download={resume}>Download CV</a>
        </button>

      </div>

      <div className='flex justify-center md:mt-0 mt-6'>
        <img 
          id='viggoImage' 
          src={viggo} 
          className='rounded-3xl w-64 h-auto shadow-lg object-cover' 
          alt="Viggo" 
        />
      </div>

    </div>
  )
}

export default Biography

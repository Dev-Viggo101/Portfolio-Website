import linkden from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.svg'

function Footer() {
  return (
    <div className="bg-opacity-15 rounded-md w-11/12 md:w-4/12 mx-auto mt-16 mb-9">

      {/* Social Icons */}
      <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-10 p-4">
        <div id='githubDiv'>

          <a href='https://github.com/Dev-Viggo101' target='_blank'>

            <img
              className='w-8 h-8 sm:w-10 sm:h-10 rounded-md shadow-none'
              src={github}
              alt="GitHub"
            />

          </a>

        </div>

        <div id='linkedinDiv'>

          <a href='https://www.linkedin.com/in/viggo-julies-26b4782b7/' target='_blank'>

            <img
              className='w-8 h-8 sm:w-10 sm:h-10 rounded-md shadow-none dark:bg-white'
              src={linkden}
              alt="LinkedIn"
            />

          </a>

        </div>

        <div id='instagramDiv'>

          <a href='https://www.instagram.com/viggo.101/?hl=en' target='_blank'>

            <img
              className='w-8 h-8 sm:w-10 sm:h-10 rounded-md shadow-none dark:bg-white'
              src={instagram}
              alt="Instagram"
            />

          </a>

        </div>
      </div>

      {/* Footer Text */}
      <h6 className='text-center text-xs sm:text-sm md:text-base text-purple-700 mt-4'>
        &copy; 2025 VIGGO. All Rights Reserved.
      </h6>

    </div>
  )
}

export default Footer

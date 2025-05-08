import viggo from '../assets/viggo.svg';
import Button from '../components/Button';
import WavyText from './WavyText';

function HomePage() {
  return (

    <div id="Home" className='mt-20 dark:bg-black'>

      <div
        className="w-full max-w-7xl mx-auto mt-10 grid grid-cols-2 gap-8 px-4"
      >
        <div className="sm:max-lg:flex sm:max-lg:justify-start lg:ml-80">
          <img className="w-48 sm:w-64" src={viggo} alt="Viggo" />
        </div>

        <div className="flex flex-col justify-center items-center sm:items-start sm:mt-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center sm:text-left dark:text-white">
            Hello, I am{' '}
            <span className="text-4xl sm:text-5xl text-white bg-purple-700">
              Viggo Julies
            </span>
          </h2>

          <Button wordOne="Software Developer" wordTwo="Website Developer" />
        </div>

        <WavyText />
      </div>

    </div>
    
  );
}

export default HomePage;

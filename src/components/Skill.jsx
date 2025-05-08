import { useState, useEffect } from 'react';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import js from '../assets/javascript.svg';
import react from '../assets/atom.svg';
import cSharp from '../assets/csharp.svg';
import python from '../assets/python.svg';
import java from '../assets/java.svg';
import creative from '../assets/creative.svg';
import criticalThinking from '../assets/critical thinking.svg';
import leadership from '../assets/leadership.svg';
import problemSolving from '../assets/problem-solving.svg';
import teamWork from '../assets/team work.svg';
import timeManagement from '../assets/time management.svg';

const proImages = [html, css, js, react, cSharp, python, java];
const softImages = [creative, criticalThinking, leadership, problemSolving, teamWork, timeManagement];
const proText = ["HTML", "CSS", "JavaScript", "React", "C#", "Python", "Java"];
const softText = ["Creative Thinking", "Critical Thinking", "Leadership", "Problem-solving", "Teamwork", "Time Management"];

function Skill() {
  const [imageIndex, setImageIndex] = useState(0);
  const [softIndex, setSoftIndex] = useState(0);

  const nextImage = () => setImageIndex((prev) => (prev + 1) % proImages.length);
  const prevImage = () => setImageIndex((prev) => (prev === 0 ? proImages.length - 1 : prev - 1));

  const nextSoftImage = () => setSoftIndex((prev) => (prev + 1) % softImages.length);
  const prevSoftImage = () => setSoftIndex((prev) => (prev === 0 ? softImages.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
      nextSoftImage();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 px-6 py-10'>

      {/* Technical Skills */}
      <div className="flex flex-col items-center">
        <h2 className='text-2xl font-semibold mb-6'>Technical Skills</h2>

        <div className='flex items-center'>
          <button className='h-10 w-10 bg-purple-700 text-white rounded-md mr-4' onClick={prevImage}>
            &laquo;
          </button>

          <img
            className='h-64 w-64 object-contain rounded-3xl shadow-md bg-white p-4'
            src={proImages[imageIndex]}
            alt='Technical Skill'
          />

          <button className='h-10 w-10 bg-purple-700 text-white rounded-md ml-4' onClick={nextImage}>
            &raquo;
          </button>
        </div>

        <h3 className='text-xl mt-4'>{proText[imageIndex]}</h3>
      </div>

      {/* Soft Skills */}
      <div className="flex flex-col items-center">
        <h2 className='text-2xl font-semibold mb-6'>Soft Skills</h2>

        <div className='flex items-center'>
          <button className='h-10 w-10 bg-purple-700 text-white rounded-md mr-4' onClick={prevSoftImage}>
            &laquo;
          </button>

          <img
            className='h-64 w-64 object-contain rounded-3xl shadow-md bg-white p-4'
            src={softImages[softIndex]}
            alt='Soft Skill'
          />

          <button className='h-10 w-10 bg-purple-700 text-white rounded-md ml-4' onClick={nextSoftImage}>
            &raquo;
          </button>
        </div>

        <h3 className='text-xl mt-4'>{softText[softIndex]}</h3>
      </div>

    </div>
  );
}

export default Skill;

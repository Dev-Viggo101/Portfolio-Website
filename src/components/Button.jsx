import { useState } from 'react';

function Button({ wordOne, wordTwo }) {
  const [text, setText] = useState(wordOne);

  const textChange = () => {
    setText((previousText) =>
      previousText === wordOne ? wordTwo : wordOne
    );
  };

  return (
    <div className="flex flex-col items-center sm:mt-8 mt-4 px-4 text-center">
      <h1 className="text-purple-700 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        {text}
      </h1>

      <button
        onClick={textChange}
        className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 ring-2 ring-purple-400 mt-8 text-xl"
      >
        Debug
      </button>
    </div>
  );
}

export default Button;

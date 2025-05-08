import { useState } from "react"

const divs = [
  <div className='text-center p-4 rounded-xl shadow-black shadow-md bg-white dark:bg-gray-400 dark:shadow-white'>
    <h2 className="text-lg font-semibold">2023 - FIRST YEAR</h2>
    <p className="mt-2 text-sm md:text-base">
      During the first year of my studies, I embraced university life with an open mind and a strong determination to succeed. While university is a time filled with new experiences, I remained deeply committed to my academic goals. I understood early on that success would require balance.

      Despite the excitement and adjustments that come with transitioning into higher education, I maintained a high level of discipline in my studies. As a result, I achieved an exceptional academic record, earning distinctions in all 15 of my modules and earning myself in the top three across all campuses. 
    </p>
  </div>,
  <div className='text-center p-4 rounded-xl shadow-black shadow-md bg-white dark:bg-gray-400 dark:shadow-white'>
    <h2 className="text-lg font-semibold">2024 - SECOND YEAR</h2>
    <p className="mt-2 text-sm md:text-base">In the second year, the curriculum became more specialized and intellectually demanding, with a greater focus on our chosen areas of study. Despite these increased challenges, I remained committed to excellence and continued to rank in the top three across campuses. This experience taught me how to adapt quickly, embrace complexity, and maintain high standards even under pressure.</p>
  </div>,
  <div className='text-center p-4 rounded-xl shadow-black shadow-md bg-white dark:bg-gray-400 dark:shadow-white'>
    <h2 className="text-lg font-semibold">2025 - THIRD YEAR</h2>
    <p className="mt-2 text-sm md:text-base">Now in the third and final year of my studies, I have completed the first semester with a deeper understanding of programming principles and development practices. This phase of my academic journey has been particularly enriching, as it has equipped me with both theoretical insight and practical skills essential to the world of software development.</p>
  </div>,
]

const listItems = [
  { item: 'Diploma in IT.' },
  { item: 'Studied for 2 and a half years at Belgium Campus ITversity.' },
  { item: 'Top 3 for 2024 & 2025.' },
  { item: 'Currently a junior developer.' },
  { item: 'In the process of improving my overall thinking and coding skills to further my programming knowledge.' },
  { item: 'Passionate about continuous learning, especially in the fields of software development, problem-solving, and system design.' },
  { item: 'Interested in full-stack development and expanding knowledge in both front-end and back-end technologies.' },
  { item: 'Committed to becoming a well-rounded developer who can contribute meaningfully to innovative projects and development teams.' }
]

function Education() {
  const [index, setIndex] = useState(0)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-10">

      {/* Left Column - List */}
      <div>
        <ol className="text-base md:text-lg list-disc pl-6">
          {listItems.map((listItem, i) => (
            <li key={i} className="mb-3">{listItem.item}</li>
          ))}
        </ol>
      </div>

      {/* Right Column - Year Info & Buttons */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-md">{divs[index]}</div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {divs.map((_, i) => (
            <button
              key={i}
              className={`bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 text-xl transition ${
                index === i ? 'ring-2 ring-purple-400' : ''
              }`}
              onClick={() => setIndex(i)}
            >
              Year {i + 1}
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Education

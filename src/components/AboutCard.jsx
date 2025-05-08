import Skills from '../assets/skills.svg';
import Edu from '../assets/education.svg';
import Bio from '../assets/bio.svg';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Biography from './Biography';
import Education from './Education';
import Skill from './Skill';

const aboutMe = [
  { icon: Bio, label: "Bio" },
  { icon: Edu, label: "Education" },
  { icon: Skills, label: "Skills" },
];

const tabs = aboutMe.slice(0, 3);

function Card() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="w-[95%] max-w-[1200px] h-auto min-h-[80vh] bg-white mx-auto mt-10 rounded-xl shadow-lg flex flex-col dark:shadow-white dark:bg-black">
      
      <nav className="bg-[#fdfdfd] px-4 pt-2 pb-1 border-b border-gray-200 rounded-t-xl dark:bg-black">
        <ul className="flex justify-between gap-2 md:gap-4">
          {tabs.map((item) => (
            <motion.li
              key={item.label}
              initial={false}
              animate={{
                backgroundColor: item === selectedTab ? (document.documentElement.classList.contains("dark") ? "#2a2a2a" : "#eee")
                : "transparent",
              }}
              className="flex items-center gap-2 px-3 py-2 cursor-pointer rounded-t-md text-sm md:text-lg font-medium text-gray-800 hover:bg-gray-100 transition-all w-full justify-center dark:text-white"
              onClick={() => setSelectedTab(item)}
            >
              <img src={item.icon} alt={item.label} className="h-5 w-5 md:h-6 md:w-6" />
              {item.label}
              {item === selectedTab ? (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  layoutId="underline"
                />
              ) : null}
            </motion.li>
          ))}
        </ul>
      </nav>

      <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center w-full"
          >
            {selectedTab.label === "Bio" && <Biography />}
            {selectedTab.label === "Education" && <Education />}
            {selectedTab.label === "Skills" && <Skill />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default Card;

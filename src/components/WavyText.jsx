import { useEffect, useRef } from 'react';
import { animate, stagger } from 'framer-motion'
import {splitText } from 'motion-plus'

function WavyText() {

    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        document.fonts.ready.then(() => {
            const wavyElement = containerRef.current.querySelector(".wavy");
            if (!wavyElement) return;

            const { chars } = splitText(wavyElement);
            containerRef.current.style.visibility = "visible";

            const staggerDelay = 0.15;

            animate(
                chars,
                { y: [-20, 20] },
                {
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                duration: 2,
                delay: stagger(staggerDelay, {
                    startDelay: -staggerDelay * chars.length,
                }),
                }
            );
            });
        }, []);


  return (
    
     <div ref={containerRef} className='col-span-2 flex justify-center items-center mt-10' style={{ visibility: 'hidden' }}>

        <h1 className='text-2xl font-bold text-black dark:text-white'>

            A Developer who went from <span className="wavy">Bugs to Brilliance.</span>

        </h1>

        <style>{`
            .split-char {
                will-change: transform, opacity;
            }
        `}</style>

    </div>

  )
}

export default WavyText
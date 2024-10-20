import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="sm:px-10 px-5 my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">Hi, I’m Aurobindo Patra</p>
              <p className="text-[#afb0b6] text-base font-generalsans">
              Results-oriented Full Stack Developer with expertise in optimizing project outcomes and enhancing user experiences.
Skilled in strategic project management, team collaboration, and leveraging technical expertise across front-end and
back-end technologies.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="w-full  h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">

            <div className=' flex flex-row container gap-3 row-span-1'>
            <img src="assets/typescript.png" alt="grid-2" className="w-[25] sm:h-[27px] h-fit object-contain" />
            <img src="assets/css.jpg" alt="grid-2" className="w-[25] sm:h-[27px] h-fit object-contain" />
            <img src="assets/git.jpg" alt="grid-2" className="w-[25] sm:h-[27px] h-fit object-contain" />
            <img src="assets/angular.jpg" alt="grid-2" className="w-[25] sm:h-[27px] h-fit object-contain" />
            <img src="assets/html.jpg" alt="grid-2" className="w-[25] sm:h-[27px] h-fit object-contain" />
            <img src="assets/javascript.jpg" alt="grid-2" className="w-[25] sm:h-[27px] h-fit object-contain" />
            <img src="assets/mongodb.jpg" alt="grid-2" className="w-[25] sm:h-[27px] h-fit object-contain" />
            <img src="assets/node.jpg" alt="grid-2" className="w-[25] sm:h-[27px] h-fit object-contain" />
            
          
            </div>
            <div className=' flex flex-row gap-3'>
            <img src="assets/boot.jpg" alt="grid-2" className="w-[25] sm:h-[27px] h-fit object-contain" />
            <img src="assets/poge.jpg" alt="grid-2" className="w-[25] sm:h-[27px] h-fit object-contain" />
            <img src="assets/tailwindcss.png" alt="grid-2" className="w-[25] sm:h-[27px] h-fit object-contain" />
            <img src="assets/react.svg" alt="grid-2" className="w-[25] sm:h-[27px] h-fit object-contain" />
            <img src="assets/ne.jpg" alt="grid-2" className="w-[25] sm:h-[27px] h-fit object-contain" />
            <img src="assets/docker.jpg" alt="grid-2" className="w-[25] sm:h-[27px] h-fit object-contain" />
            </div>

            <div>
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">Tech Stack</p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">I’m very flexible with time zone communications & locations</p>
              <p className="text-[#afb0b6] text-base font-generalsans">I&apos;m based in India</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">My Passion for Coding</p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="text-[#afb0b6] text-base font-generalsans text-center">Contact me</p>
              <div className="cursor-pointer flex justify-center items-center gap-2" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent text-white">aurobindolife888@gmail.com</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

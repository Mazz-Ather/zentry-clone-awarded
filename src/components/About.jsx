import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[17px]">
          Welcome to Get social digital marketing agency
        </p>

        <AnimatedTitle
          title="E<b>x</b>pl<b>o</b>re <b>o</b>ur s<b>e</b>rvi<b>c</b>es ."
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>Transform Your Brand with Expert Digital Marketing</p>
          <p className="text-gray-500">
          Our agency specializes in creating customized digital marketing strategies that enhance your online visibility and drive real results.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          {/* <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          /> */}
            <video
            src={'/videos/about1.mp4'}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover"
            // onLoadedData={handleVideoLoad}
          />
        </div>
      </div>
    </div>
  );
};

export default About;

import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">Click Here  !</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
         
Elevate Your Online Presence with Our Comprehensive Digital Solutions
        </p>
        <p className="max-w-5xl font-circular-web text-lg text-blue-50 opacity-50">
        Our agency offers a full suite of services to help you build, grow, and optimize your online presence. We specialize in web development using React, Next.js, and WordPress, creating fast, responsive, and user-friendly websites tailored to your needs. Additionally, our SEO and digital marketing strategies ensure your brand reaches the right audience, while our expert web design services enhance user experience and drive engagement. Partner with us to bring your vision to life and achieve measurable success online.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              <b>web development</b>
            </>
          }
          description="We offer expert web development services using Next.js, React, and WordPress. Whether you need a dynamic, high-performance site or a customizable, user-friendly solution, we create websites that are optimized for speed, SEO, and seamless user experience."
          isComingSoon
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-2.mp4"
            title={
              <>
                <b>seo</b>
              </>
            }
            description="Seo Optimization lorem sjds dshds sdkhs j."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/feature-3.mp4"
            title={
              <>
                <b>digital marketing</b>
              </>
            }
            description="A adas ksdhsa sadhsd sdiusdhs dshd kjes."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
                <b>web design</b>
              </>
            }
            description="A cross-world web design thay sdhs fdsfusdf sdfsdkjf ."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
        <BentoCard
            src="videos/thomas.mp4"
            title={
              <>
                <b>social media</b>
              </>
            }
            description="A cross-world web design thay sdhs fdsfusdf sdfsdkjf ."
            isComingSoon
          />
        </BentoTilt>

       <BentoTilt className="bento-tilt_2">
       <BentoCard
            src="videos/ero-1.mp4"
            title={
              <>
                <b>logo design</b>
              </>
            }
            description="A cross-world web design thay sdhs fdsfusdf sdfsdkjf ."
            isComingSoon
          />
        
        </BentoTilt>
      </div>
      {/* exact */}
      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7 mt-8">

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/about1.mp4"
            title={
              <>
                <b>stationary design</b>
              </>
            }
            description="A adas ksdhsa sadhsd sdiusdhs dshd kjes."
            isComingSoon
          />
        </BentoTilt>
            <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
              <BentoCard
                src="videos/hero-2.mp4"
                title={
                  <>
                    <b>mobile app development</b>
                  </>
                }
                description="Seo Optimization lorem sjds dshds sdkhs j."
                isComingSoon
              />
            </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/hro-2.mp4"
            title={
              <>
                <b>2d animation</b>
              </>
            }
            description="A cross-world web design thay sdhs fdsfusdf sdfsdkjf ."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
        <BentoCard
            src="videos/ho-3.mp4"
            title={
              <>
                <b>illustration</b>
              </>
            }
            description="A cross-world web design thay sdhs fdsfusdf sdfsdkjf ."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;

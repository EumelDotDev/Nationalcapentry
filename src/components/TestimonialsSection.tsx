"use client";

import { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    name: "Andy Lange",
    services: "Installation & Assembly",
    text: "NCI did a great job installing my kitchen island for a great price. They were quick and cleaned up after themselves. They accommodated all of my requests enthusiastically. I would recommend them to everyone.",
    avatar: "AL",
  },
  {
    id: 2,
    name: "Leslie Talman",
    services: "General Carpentry",
    text: "I had a water leak from the condo above. NCI came to my rescue and did a top notch job. They were always on time, tidy and did the job in a timely manner. Very reasonable price as well. I would highly recommend this company.",
    avatar: "LT",
  },
  {
    id: 3,
    name: "Stephen Ishmael",
    services: "Custom Carpentry",
    text: "Once I gave the go ahead, they were on site with their team leader and all their safety gear to get my project done. I was truly amazed at how I did not have to worry about the work being done. I could see the professionalism of the team... solid carpentry and workmanship.",
    avatar: "SI",
  },
  {
    id: 4,
    name: "Blair Jensen",
    services: "Installation",
    text: "They did a great job in with the installation, even though the ground and walls of the garage had shifted overtime and things weren't 100% level. The price was good and everything went smoothly.",
    avatar: "BJ",
  },
  {
    id: 5,
    name: "Autumn",
    services: "Finish Carpentry",
    text: "Very hard worker and did a really great job on the room, from mudding, to painting to laying down the floor he did an incredible job... dealing with his level of workmanship and skill I was very impressed. I would hire him again for any work!",
    avatar: "A",
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === reviews.length - 1 ? 0 : current + 1));
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((current) => (current === reviews.length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? reviews.length - 1 : current - 1));
  };

  return (
    <section className="w-full bg-zinc-950 pt-24 pb-0 overflow-hidden flex flex-col items-center border-t border-zinc-900">
      
      {/* HEADER - Restored to the established dark/moody architectural aesthetic */}
      <div className="text-center mb-16 md:mb-24 relative z-50">
        <span className="block text-zinc-500 font-sans font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
          What our clients are saying
        </span>
        <h2 className="font-serif text-4xl md:text-6xl tracking-tighter text-zinc-50">
          Client Feedback
        </h2>
      </div>

      {/* 3D CAROUSEL WRAPPER */}
      <div className="relative w-full max-w-7xl h-[450px] md:h-[400px] flex items-center justify-center">
        
        {reviews.map((review, index) => {
          // Determine relative position
          let position = "hidden";
          let zIndex = 0;
          let transform = "";
          let opacity = "";
          let pointerEvents = "pointer-events-none";

          if (index === activeIndex) {
            position = "active";
            zIndex = 30;
            transform = "scale(1) translateX(0)";
            opacity = "opacity-100";
            pointerEvents = "pointer-events-auto";
          } else if (index === activeIndex - 1 || (activeIndex === 0 && index === reviews.length - 1)) {
            position = "prev";
            zIndex = 20;
            transform = "scale(0.85) translateX(-60%)";
            opacity = "opacity-40";
          } else if (index === activeIndex + 1 || (activeIndex === reviews.length - 1 && index === 0)) {
            position = "next";
            zIndex = 20;
            transform = "scale(0.85) translateX(60%)";
            opacity = "opacity-40";
          } else {
            // Far away cards
            transform = index < activeIndex ? "scale(0.7) translateX(-100%)" : "scale(0.7) translateX(100%)";
            opacity = "opacity-0";
          }

          return (
            <div
              key={review.id}
              className={`absolute top-1/2 -translate-y-1/2 w-[90vw] md:w-[600px] bg-zinc-900 rounded-lg p-10 md:p-14 transition-all duration-700 ease-in-out ${opacity} ${pointerEvents}`}
              style={{
                transform: `${transform} translateY(-50%)`,
                zIndex,
                boxShadow: position === "active" ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)" : "none",
              }}
            >
              {/* Background Quote Mark */}
              <div className="absolute top-4 right-8 font-serif text-[150px] text-zinc-800 leading-none select-none z-0">
                “
              </div>

              <div className="relative z-10">
                <p className="font-sans text-lg md:text-xl text-zinc-300 leading-relaxed mb-10">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400 flex items-center justify-center font-serif text-lg">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-zinc-100 font-bold">{review.name}</h4>
                    <p className="font-sans text-xs text-zinc-500 tracking-wider uppercase mt-1">{review.services}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* CONTROLS */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full max-w-4xl flex justify-between px-4 z-40 pointer-events-none">
          <button 
            onClick={prevSlide}
            className="w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors pointer-events-auto shadow-lg"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors pointer-events-auto shadow-lg"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}

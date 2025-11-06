// "use client";

// import { useEffect } from "react";
// import gsap from "gsap";
// import { Observer } from "gsap/Observer";

// gsap.registerPlugin(Observer);

// const sectionsData = [
//   { title: "Scroll down", className: "first", bg: "https://assets.codepen.io/16327/site-landscape-1.jpg" },
//   { title: "Animated with GSAP", className: "second", bg: "https://assets.codepen.io/16327/site-landscape-5.jpeg" },
//   { title: "GreenSock", className: "third", bg: "https://assets.codepen.io/16327/site-landscape-2.jpg" },
//   { title: "Animation platform", className: "fourth", bg: "https://assets.codepen.io/16327/site-landscape-6.jpg" },
//   { title: "Keep scrolling", className: "fifth", bg: "https://assets.codepen.io/16327/site-landscape-8.jpg" },
// ];

// export default function AnimatedSections() {
//   useEffect(() => {
//     const sections = gsap.utils.toArray<HTMLElement>("section");
//     const images = gsap.utils.toArray<HTMLElement>(".bg");
//     const headings = gsap.utils.toArray<HTMLElement>(".section-heading");
//     const outerWrappers = gsap.utils.toArray<HTMLElement>(".outer");
//     const innerWrappers = gsap.utils.toArray<HTMLElement>(".inner");

//     let currentIndex = -1;
//     let animating = false;
//     const wrap = gsap.utils.wrap(0, sections.length);

//     gsap.set(outerWrappers, { yPercent: 100 });
//     gsap.set(innerWrappers, { yPercent: -100 });

//     const gotoSection = (index: number, direction: number) => {
//       index = wrap(index);
//       animating = true;
//       const fromTop = direction === -1;
//       const dFactor = fromTop ? -1 : 1;

//       const tl = gsap.timeline({
//         defaults: { duration: 1.25, ease: "power1.inOut" },
//         onComplete: ():any => (animating = false),
//       });

//       if (currentIndex >= 0) {
//         gsap.set(sections[currentIndex], { zIndex: 0 });
//         tl.to(images[currentIndex], { yPercent: -15 * dFactor })
//           .set(sections[currentIndex], { autoAlpha: 0 });
//       }

//       gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });

//       tl.fromTo(
//         [outerWrappers[index], innerWrappers[index]],
//         { yPercent: (i: number) => (i ? -100 * dFactor : 100 * dFactor) },
//         { yPercent: 0 },
//         0
//       )
//         .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
//         .fromTo(
//           headings[index].textContent?.split("").map((char) => {
//             const span = document.createElement("span");
//             span.textContent = char;
//             span.style.display = "inline-block";
//             headings[index].appendChild(span);
//             return span;
//           }) ?? [],
//           { autoAlpha: 0, yPercent: 150 * dFactor },
//           {
//             autoAlpha: 1,
//             yPercent: 0,
//             duration: 1,
//             ease: "power2",
//             stagger: { each: 0.02, from: "random" },
//           },
//           0.2
//         );

//       currentIndex = index;
//     };

//     const observer = Observer.create({
//       type: "wheel,touch,pointer",
//       wheelSpeed: -1,
//       onDown: () => !animating && gotoSection(currentIndex - 1, -1),
//       onUp: () => !animating && gotoSection(currentIndex + 1, 1),
//       tolerance: 10,
//       preventDefault: true,
//     });

//     gotoSection(0, 1);

//     return () => observer.kill();
//   }, []);

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       <header className="fixed top-0 left-0 z-30 flex w-full items-center justify-between px-8 py-6 uppercase tracking-widest text-white text-sm">
//         <div className="font-semibold">Animated Sections</div>
//         <div>
//           <a
//             href="https://codepen.io/BrianCross/pen/PoWapLP"
//             target="_blank"
//             rel="noreferrer"
//             className="text-gray-300 hover:text-white"
//           >
//             Original Inspiration
//           </a>
//         </div>
//       </header>

//       {sectionsData.map((sec, i) => (
//         <section
//           key={i}
//           className={`${sec.className} fixed top-0 left-0 w-full h-full invisible`}
//         >
//           <div className="outer w-full h-full overflow-hidden">
//             <div className="inner w-full h-full overflow-hidden">
//               <div
//                 className="bg absolute top-0 left-0 w-full h-full flex items-center justify-center text-white bg-cover bg-center"
//                 style={{
//                   backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.1)), url(${sec.bg})`,
//                 }}
//               >
//                 <h2 className="section-heading text-center font-bold text-[clamp(1rem,8vw,10rem)] leading-tight">
//                   {sec.title}
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </section>
//       ))}
//     </div>
//   );
// }

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Generate static params for all projects
export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex(p => p.slug === slug);
  const project = projectsData[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  return (
    <main className="min-h-screen bg-white text-zinc-950 selection:bg-zinc-950 selection:text-white">
      {/* Light Navbar for dark hero image background */}
      <div className="absolute top-0 left-0 w-full z-50 px-6 lg:px-16 pt-12 flex flex-col gap-6">
        <Navbar darkText={false} /> 
        <Link 
          href="/projects"
          className="inline-flex items-center text-xs font-sans font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors group w-max mt-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full"
        >
          <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span>
          Back to Projects
        </Link> 
        {/* Note: Navbar component might need a 'darkText' prop to switch colors if the background is white, or we just rely on mix-blend-difference */}
      </div>

      {/* Hero Image */}
      <section className="relative w-full h-[80vh] md:h-screen">
        <Image 
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Slight dark overlay to make text readable */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-16 pb-16 md:pb-24">
          <h1 className="font-serif text-5xl md:text-8xl lg:text-[10vw] text-white leading-[0.9] tracking-tighter max-w-6xl">
            {project.title}
          </h1>
          <span className="block mt-4 md:mt-8 font-sans text-sm md:text-base text-zinc-200 uppercase tracking-widest font-bold">
            {project.category}
          </span>
        </div>
      </section>

      {/* Project Metadata & Brief */}
      <section className="py-24 md:py-32 px-6 md:px-16 max-w-[1600px] mx-auto relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mt-12 md:mt-0">
          
          {/* Left: Metadata */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            <div>
              <span className="block font-sans text-xs text-zinc-500 uppercase tracking-widest mb-2 font-bold">Client</span>
              <p className="font-serif text-xl md:text-2xl text-zinc-900">{project.client}</p>
            </div>
            <div className="w-full h-px bg-zinc-200" />
            <div>
              <span className="block font-sans text-xs text-zinc-500 uppercase tracking-widest mb-2 font-bold">Location</span>
              <p className="font-serif text-xl md:text-2xl text-zinc-900">{project.location}</p>
            </div>
            <div className="w-full h-px bg-zinc-200" />
            <div>
              <span className="block font-sans text-xs text-zinc-500 uppercase tracking-widest mb-2 font-bold">Scope</span>
              <p className="font-serif text-xl md:text-2xl text-zinc-900">{project.scope}</p>
            </div>
            <div className="w-full h-px bg-zinc-200" />
            <div>
              <span className="block font-sans text-xs text-zinc-500 uppercase tracking-widest mb-2 font-bold">Duration</span>
              <p className="font-serif text-xl md:text-2xl text-zinc-900">{project.duration}</p>
            </div>
          </div>

          {/* Right: Narrative */}
          <div className="lg:col-span-8 flex flex-col gap-12 lg:pl-12">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl tracking-tight mb-6">The Overview</h2>
              <p className="font-sans text-lg md:text-xl leading-relaxed text-zinc-600">
                {project.overview}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
              <div>
                <h3 className="font-sans text-sm font-bold uppercase tracking-widest mb-4">The Challenge</h3>
                <p className="font-sans text-base leading-relaxed text-zinc-600">
                  {project.challenge}
                </p>
              </div>
              <div>
                <h3 className="font-sans text-sm font-bold uppercase tracking-widest mb-4">The Solution</h3>
                <p className="font-sans text-base leading-relaxed text-zinc-600">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Before & After Interactive Component */}
      <section className="w-full">
        <div className="text-center mb-12 px-6">
          <h2 className="font-serif text-4xl tracking-tight">The Transformation</h2>
          <p className="font-sans text-zinc-500 mt-2">Drag to compare before and after</p>
        </div>
        <BeforeAfterSlider 
          beforeImage={project.beforeImage} 
          afterImage={project.afterImage} 
        />
      </section>

      {/* Gallery */}
      <section className="py-24 md:py-32 px-6 md:px-16 max-w-[1600px] mx-auto">
        <h2 className="font-serif text-4xl tracking-tight mb-16 text-center">Project Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {project.gallery.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative w-full overflow-hidden ${idx === 2 ? 'md:col-span-2 h-[50vh] md:h-[80vh]' : 'h-[50vh] md:h-[70vh]'}`}
            >
              <Image 
                src={img}
                alt={`${project.title} detail ${idx + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Next Project Nav */}
      <section className="py-24 md:py-32 border-t border-zinc-200 px-6 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <span className="block font-sans text-xs text-zinc-500 uppercase tracking-widest mb-6 font-bold">Next Project</span>
            <Link 
              href={`/projects/${nextProject.slug}`}
              className="inline-block group"
            >
              <h2 className="font-serif text-5xl md:text-8xl tracking-tighter text-zinc-900 group-hover:text-zinc-500 transition-colors duration-500">
                {nextProject.title}
              </h2>
            </Link>
          </div>
          <div className="flex-1 w-full relative h-[40vh] md:h-[60vh] overflow-hidden group">
            <Link href={`/projects/${nextProject.slug}`}>
              <Image 
                src={nextProject.thumbnail}
                alt={nextProject.title}
                fill
                className="object-cover transform group-hover:scale-105 transition-all duration-1000 saturate-0 group-hover:saturate-100"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Using standard footer, but we might need to adjust background if Footer is explicitly dark */}
      {/* Our Footer component defaults to dark bg, which is a nice contrast to end the page */}
      <Footer />
    </main>
  );
}

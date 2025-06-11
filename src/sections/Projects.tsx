import bookStore from "@/assets/images/bookStore.png";
import hirehub from "@/assets/images/hirehub.png";
import drivetest from "@/assets/images/drivetest.png";
// import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Drivetest Kiosk",
    year: "2024",
    title: "Drive Test Booking & Management System",
    results: [
      { title: "Developed a full-stack MERN application with role-based access" },
      { title: "Enabled secure booking for users and result management for examiners" },
      { title: "Built dynamic dashboards for Admin, User, and Examiner roles" },
    ],
    link: "https://github.com/asifmujeeb/drivetest",
    image: drivetest,
  },
    {
      company: "Page Turners",
      year: "2024",
      title: "Bookstore E-Commerce Platform",
      results: [
        { title: "Developed a full-stack PHP website with product catalog, session-based cart, and order placement" },
        { title: "Enabled user authentication, book management, category filters, and PDF receipt generation" },
        { title: "Built a responsive UI using Bootstrap, jQuery, and custom CSS for seamless user experience" },
      ],
      link: "https://github.com/asifmujeeb/BookStore",
      image: bookStore,
    },
    {
      company: "Hirehub",
      year: "2024",
      title: "Job Assistance & Career Growth Platform",
      results: [
        { title: "Built a responsive layout using HTML and CSS" },
        { title: "Created a clean and professional UI for job seekers" },
        { title: "Improved accessibility and mobile friendliness" },
      ],
      link: "https://asifmujeeb.github.io/Hirehub/",
      image: hirehub,
    },
];

type ProjectsSectionProps = {
  id?: string;
};

export const ProjectsSection = ({ id }: ProjectsSectionProps) => {
  return (
    <section id={id} className="pb-16 lg:py-24">
      <div className="container">
        {/* <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">
          Let's Explore, how I transformed concepts into engaging digital
          experiences
        </p> */}
        <SectionHeader
          eyebrows="Real-world Results"
          title="Featured Projects"
          description="Let's Explore, how I transformed concepts into engaging digital
          experiences"
        />
        <div className="flex flex-col mt-10 gap-20 md:mt-20 ">
          
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:px-20 lg:pt-16 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px )`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text ">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5  md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-base text-white/50 ">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex px-6 items-center justify-center gap-2 mt-8 md:w-auto ">
                      <span>Visit Me</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:max-w-none lg:w-auto"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

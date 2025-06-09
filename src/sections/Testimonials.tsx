import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Passionate Developer",
    position: "Aspiring Software Engineer & Problem Solver",
    text: "I find inspiration in solving real-world problems through technology. Creating seamless user experiences and efficient applications is what excites me the most. I am always eager to learn new technologies and improve my skills to build impactful solutions.",
    avatar: memojiAvatar1,
  },
  {
    name: "Lifelong Learner",
    position: "Tech Enthusiast & Explorer",
    text: "Technology is always evolving, and I thrive on continuous learning. I enjoy exploring new frameworks, best practices, and emerging trends to improve my coding skills and stay ahead in the industry.",
    avatar: memojiAvatar2,
  },
  {
    name: "User-Centric Designer",
    position: "Building for Accessibility & Usability",
    text: "I believe great software is not just about functionality but also about usability. I am passionate about designing intuitive and accessible applications that enhance user experiences and make technology more inclusive.",
    avatar: memojiAvatar3,
  },
  {
    name: "Logical Thinker & Creative Coder",
    position: "Turning Ideas into Functional Solutions",
    text: "Programming is like solving a puzzle—every challenge is an opportunity to think critically and creatively. I love transforming ideas into working solutions and optimizing code for better performance and maintainability.",
    avatar: memojiAvatar4,
  },
  {
    name: "Team Player & Collaborator",
    position: "Working Together to Build Great Software",
    text: "I enjoy working in teams, sharing knowledge, and collaborating to build amazing projects. Whether it's through pair programming or open-source contributions, I believe teamwork amplifies innovation and success.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrows="MY INSPIRATION"
          title="What Inspires Me"
          description="Don't just take my word for it. See what drives me to create and
        innovate in the world of technology."
        />
        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-8 pr-8 testimonialMove_left">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex rounded-full justify-center items-center flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

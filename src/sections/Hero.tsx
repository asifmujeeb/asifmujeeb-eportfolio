import memojiImage from "@/assets/images/memoji-computer-1.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";

type HeroSectionProps = {
  id?: string;
};

export const HeroSection = ({ id }: HeroSectionProps) => {
  return (
    <div
      id={id}
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip "
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={800} rotation={45}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={750} rotation={-38}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={950} rotation={145}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={790} rotation={14}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={690} rotation={185}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={-72}>
          <StarIcon className="size-18 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-72} animate={false}>
          <SparkleIcon className="size-18 text-red-300" />
        </HeroOrbit>
        <HeroOrbit size={610} rotation={-72} animate={false}>
          <SparkleIcon className="size-20 text-red-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={-12} animate={false}>
          <SparkleIcon className="size-18 text-red-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={72} animate={false}>
          <SparkleIcon className="size-16 text-red-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={110} animate={false}>
          <SparkleIcon className="size-16 text-red-300" />
        </HeroOrbit>
        <HeroOrbit size={780} rotation={110} animate={false}>
          <SparkleIcon className="size-16 text-red-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={0}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={400} rotation={0}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg ">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in bringing designs to life by creating
            high-performing, functional web applications. Let's collaborate and
            build something exceptional!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-10">
            <a href="#projects">
              <span className="font-semibold">Explore My Work</span>
            </a>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl z-10">
            <a href="mailto:asifasifmujeeb10@gmail.com?subject=Let's%20Talk%20About%20Your%20Project&body=Hi%20Asif,%0A%0A">
              <span>👋</span>
              <span className="font-semibold">Let's Connect</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

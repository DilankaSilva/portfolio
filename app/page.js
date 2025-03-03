import Head from "next/head";
import Navbar from "./component/Navbar";
import AboutMe from "./component/AboutMe";
import Technologies from "./component/Technologies";
import Experience from "./component/Experience";
import Projects from "./component/Projects";
import Hero from "./component/Hero";

import { ContactForm } from "./component/ContactForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>

      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <div className="absolute top-0 -z-10 h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
        </div>

        <div className="sticky top-0 z-50 w-full bg-neutral-950/80 backdrop-blur-sm">
          <div className="container mx-auto">
            <Navbar />
          </div>
        </div>

        <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 pointer-events-auto relative z-20">
          <div className="container mx-auto px-8">
            <section id="hero"><Hero /></section>
            <section id="about"><AboutMe /></section>
            <section id="technologies"><Technologies /></section>
            <section id="experience"><Experience /></section>

            <section id="projects"><Projects /></section>
            <section id="contact"><ContactForm /></section>
          </div>
        </div>
      </div>
    </>
  );
}

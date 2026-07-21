"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }: { project: any }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div 
      className="relative w-[280px] h-[400px] shrink-0 cursor-pointer group [perspective:1000px]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front of Card */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-muted/5 rounded-sm overflow-hidden border border-border shadow-sm">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-6 left-6 bg-background/95 backdrop-blur-md px-4 py-2 border border-border">
            <h3 className="text-xs font-mono tracking-wider uppercase">{project.title}</h3>
          </div>
        </div>
        
        {/* Back of Card */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-background border border-border rounded-sm p-8 flex flex-col justify-between shadow-sm">
          <div>
            <h3 className="text-lg font-medium mb-4">{project.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{project.desc}</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[10px] uppercase tracking-widest text-muted border-b border-border pb-2 mb-2 font-mono">System Architecture</div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string, idx: number) => (
                <span key={idx} className="text-[11px] font-mono border border-border px-2 py-1 rounded-sm text-muted">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Home() {
  const projects = [
    {
      title: "SecuWear Bio-Telemetry",
      desc: "A thesis prototype wearable safety device integrating an ESP32, GPS tracking, GSM/SIM800 SMS alerts, and an analog pulse-rate skin sensor.",
      image: "/projects/secuwear.jpg", 
      tags: ["ESP32", "GPS", "GSM/SIM800", "Sensors"]
    },
    {
      title: "AquaSmart IoT",
      desc: "An IoT-automated aquarium environment designed with independent background processing loops to manage real-time system cycles and telemetry maps.",
      image: "/projects/aquasmart.jpg",
      tags: ["IoT", "Automation", "Telemetry"]
    },
    {
      title: "MATLAB Virtual Lab",
      desc: "A GUI-based application engineered to compute node equations and simulate DC circuits utilizing Kirchhoff's and Ohm's laws.",
      image: "/projects/matlab.jpg",
      tags: ["MATLAB", "GUI", "Circuit Simulation"]
    },
    {
      title: "ESP8266 Robot Car",
      desc: "Standalone NodeMCU robot featuring local Access Point Wi-Fi hosting and an I2C OLED screen for responsive, state-driven expressions.",
      image: "/projects/robot.jpg",
      tags: ["NodeMCU", "I2C", "WebSockets"]
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-24 md:py-32 flex flex-col gap-32 relative z-10">
      
      {/* Hero Intro */}
      <section className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-24 h-24 shrink-0 rounded-full overflow-hidden border border-border">
          <img src="/profile.jpg" alt="Benedict Fusin" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="flex flex-col gap-6 pt-2">
          <h2 className="text-2xl font-medium tracking-tight">Engineer & Developer</h2>
          <p className="text-muted text-lg leading-relaxed max-w-2xl">
            Building hardware-software integrations, focusing on embedded systems, IoT architectures, and rapid digital logic optimization.
          </p>
        </div>
      </section>

      {/* 01 - Scrollable Album Projects */}
      <section id="projects" className="flex flex-col gap-8 scroll-mt-24">
        <div className="flex justify-between items-end border-b border-border pb-4">
          <h2 className="text-[11px] font-mono text-muted uppercase tracking-widest">01 — Interactive Hardware Arrays</h2>
          <span className="text-[10px] font-mono text-muted uppercase tracking-widest hidden sm:block">[ Scroll & Click to Inspect ]</span>
        </div>
        
        {/* Album Container */}
        <div className="flex overflow-x-auto gap-8 pb-8 pt-4 px-2 snap-x snap-mandatory custom-scrollbar">
          {projects.map((proj, idx) => (
            <div key={idx} className="snap-center snap-always">
              <ProjectCard project={proj} />
            </div>
          ))}
        </div>
      </section>

      {/* 02 - Stack (Vertical Accordion) */}
      <section id="stack" className="flex flex-col gap-8 scroll-mt-24">
        <h2 className="text-[11px] font-mono text-muted uppercase tracking-widest border-b border-border pb-4">02 — Technologies & Architecture</h2>
        
        <div className="flex flex-col w-full">
          {/* Accordion Item: AI */}
          <details className="group border-b border-border py-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between font-medium cursor-pointer list-none text-base">
              AI, Machine Learning & Deep Learning
              <span className="text-muted text-lg font-light transition-transform duration-300 group-open:rotate-45">+</span>
            </summary>
            <ul className="flex flex-col gap-3 mt-6 mb-2 text-muted text-sm pl-4 border-l-2 border-border ml-2">
               <li>Hugging Face</li>
               <li>Claude Code</li>
               <li>PyTorch & TensorFlow</li>
               <li>LangChain & Transformers</li>
               <li>Neural Network Pattern Recognition</li>
               <li>Regression & Classification Learning</li>
               <li>Jupyter Notebook & MATLAB</li>
            </ul>
          </details>

          {/* Accordion Item: Cloud */}
          <details className="group border-b border-border py-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between font-medium cursor-pointer list-none text-base">
              Cloud Infrastructure & DevOps
              <span className="text-muted text-lg font-light transition-transform duration-300 group-open:rotate-45">+</span>
            </summary>
            <ul className="flex flex-col gap-3 mt-6 mb-2 text-muted text-sm pl-4 border-l-2 border-border ml-2">
               <li>AWS (Amazon Web Services)</li>
               <li>Google Cloud Platform (GCP)</li>
               <li>Terraform</li>
            </ul>
          </details>

          {/* Accordion Item: Backend */}
          <details className="group border-b border-border py-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between font-medium cursor-pointer list-none text-base">
              Backend & Systems Architecture
              <span className="text-muted text-lg font-light transition-transform duration-300 group-open:rotate-45">+</span>
            </summary>
            <ul className="flex flex-col gap-3 mt-6 mb-2 text-muted text-sm pl-4 border-l-2 border-border ml-2">
               <li>Python, Java, PHP</li>
               <li>Laravel Framework</li>
               <li>MySQL & PostgreSQL</li>
               <li>Supabase & DynamoDB</li>
               <li>MongoDB</li>
            </ul>
          </details>

          {/* Accordion Item: Frontend */}
          <details className="group border-b border-border py-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between font-medium cursor-pointer list-none text-base">
              Frontend Architecture
              <span className="text-muted text-lg font-light transition-transform duration-300 group-open:rotate-45">+</span>
            </summary>
            <ul className="flex flex-col gap-3 mt-6 mb-2 text-muted text-sm pl-4 border-l-2 border-border ml-2">
               <li>TypeScript & JavaScript</li>
               <li>React & Next.js</li>
               <li>Tailwind CSS & CSS3</li>
               <li>Framer Motion</li>
            </ul>
          </details>

          {/* Accordion Item: Tools */}
          <details className="group border-b border-border py-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between font-medium cursor-pointer list-none text-base">
              Developer Tools & Operations
              <span className="text-muted text-lg font-light transition-transform duration-300 group-open:rotate-45">+</span>
            </summary>
            <ul className="flex flex-col gap-3 mt-6 mb-2 text-muted text-sm pl-4 border-l-2 border-border ml-2">
               <li>Git, GitHub & GitLab</li>
               <li>VSCode & PyCharm</li>
               <li>Discord, Microsoft Teams, Google Meet</li>
            </ul>
          </details>
        </div>
      </section>

      {/* 03 - Background */}
      <section id="background" className="flex flex-col gap-10 scroll-mt-24">
        <h2 className="text-[11px] font-mono text-muted uppercase tracking-widest border-b border-border pb-4">03 — Background & Experience</h2>
        <div className="flex flex-col gap-12 text-sm">
          <div className="flex flex-col gap-1">
             <h3 className="font-medium text-base">Polytechnic University of the Philippines, Sta. Mesa</h3>
             <p className="text-muted mt-1">Electronics Engineering Degree (2nd Year) • Iskolar ng Husay</p>
          </div>
          <div className="flex flex-col gap-1">
             <h3 className="font-medium text-base">UPMC Math Wizard Competitor</h3>
             <p className="text-muted mt-1">Competed in advanced mathematics questionnaires covering matrix polynomials, Pick's theorem, and inverse integral calculus.</p>
          </div>
        </div>
      </section>

      {/* 04 - Photography */}
      <section id="photography" className="flex flex-col gap-10 scroll-mt-24 mb-24">
        <h2 className="text-[11px] font-mono text-muted uppercase tracking-widest border-b border-border pb-4">04 — Photography</h2>
        <div className="flex flex-col gap-12 text-sm">
          <div className="flex flex-col gap-1">
             <h3 className="font-medium text-base">Freelance Photography Operations</h3>
             <p className="text-muted mt-1">Managing a photography service offering structured portrait sessions, comprehensive event coverage, and graduation shoots.</p>
          </div>
        </div>
      </section>

    </main>
  );
}

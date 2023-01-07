import Head from 'next/head'
import React, { useState } from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Socials from '../components/Socials';
import Stacks from '../components/Stacks';
import Work from '../components/Work';

export default function Home() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className="flex pl-16 md:pl-20">
      <Head>
        <title>Juan Diego Serrano - Developer</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
      </Head>
      <Navbar setActiveTab={setActiveTab} activeTab={activeTab} />
    
      <main className="w-screen h-full bg-[#010c11]">
          <Hero />
          <div className='hero-path z-30'></div>
          <Stacks />
          <Work />
          <Projects />
          <Socials />
      </main>
    </div>
  )
}

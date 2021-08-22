import Head from 'next/head'
import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Socials from '../components/Socials';
import Stacks from '../components/Stacks';

export default function Home() {
  return (
    <div className="bg-yellow-400">
      <Head>
        <title>Juan Diego Serrano - Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
      </Head>
      <div className='flex w-full relative'>
        
        <Navbar />
    
        <main className="flex py-0 flex-col w-full items-center justify-center">
          <Hero />
          <div className='hero-path'></div>
          <Stacks id='experience' />
          <Projects />
          <Socials />
        </main>
      </div>
      

      
    </div>
  )
}
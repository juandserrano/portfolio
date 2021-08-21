import Head from 'next/head'
import React, { useState } from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Stacks from '../components/Stacks';

export default function Home() {
  return (
    <div className="bg-black">
      <Head>
        <title>Juan Diego Serrano - Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex'>
        <Navbar />
        <main className="flex py-0 flex-col w-screen items-center justify-center">
          <Hero />
          <div className='hero-path'></div>
          <Stacks id='experience' />
          <Projects />
        </main>

      </div>
      

      
    </div>
  )
}

export function getServerSideProps(context) {
  
  
}
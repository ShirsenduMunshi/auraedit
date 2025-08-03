import FeaturesSection from '@/components/Features';
import Hero from '@/components/Hero';
import PricingSection from '@/components/pricing';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const stats = [
  { label: "Images Processed", value: 10000, suffix: '+' },
  { label: "Active Users", value: 500, suffix: '+' },
  { label: "AI Transformations", value: 45000, suffix: '+' },
  { label: "User Satisfaction", value: 98, suffix: '%' },
]

const App = () => {
  return (
    <div className=''>
      {/* Hero */}
      <Hero />
      {/* Stats */}
      <section className='py-20'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {stats.map((stats, index) => {
                return (<div key={index} className='text-center'>  
                  <div key={index} className='text-4xl lg:text5xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                    {stats.value.toLocaleString()}
                    {stats.suffix}
                  </div>
                  <div>
                    {stats.label}
                  </div>
                </div>
                )
              })}
            </div>
        </div>
      </section>
      {/* fetchers */}
      <FeaturesSection />
      {/* Pricing */}
      <PricingSection />

      <section className="py-20 text-center">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-bold text-center mb-8 alex-brush-regular'>Welcome to Our App</h1>
          <h2 className='text-4xl font-bold text-center mb-8'>Ready to <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent cascadia-code font-extrabold'>create something amazing</span></h2>
          <p className='text-lg text-center mb-4'>
            join thousands of creators who are already using our platform to build incredible images.</p>
          <div className='flex justify-center'>
            <Link href={"/dashboard"}><Button variant={"primary"} size={"xl"} >Get Started</Button></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App;

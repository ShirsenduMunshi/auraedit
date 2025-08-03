import { PricingTable } from '@clerk/nextjs';
import React from 'react'

const PricingSection = () => {
  return (
    <section className='py-20 max-w-4xl mx-auto px-6' id='Pricing'>
        <PricingTable />
    </section>
  )
}

export default PricingSection;

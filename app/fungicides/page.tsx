import React from 'react'
import Hero from './Hero'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agrity crop Science - Products',
  description: 'Agrity Crop Science - Supplier for Bio Insecticide, Pesticides, Herbicides and Plant Growth Promoters for Seed Treatment from Dhoraji, Gujarat, India',
};

const page = () => {
  return (
    <div>
        <Hero/>
    </div>
  )
}

export default page
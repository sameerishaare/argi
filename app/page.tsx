"use client"
import Choose from "./Choose"
import Counter from "./Counter"
import OurProduct from "./OurProduct"
import AboutPage from "./AboutPage"
import Hero from "./Hero"

export default function Home() {
  return (
    <>
      <Hero/>
      <AboutPage />
      <Counter />
      <OurProduct />
      <Choose />
    </>
  )
}

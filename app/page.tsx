"use client"
import Choose from "./Choose"
import Counter from "./Counter"
import OurProduct from "./OurProduct"
import AboutPage from "./AboutPage"
import Hero from "./Hero"
import FAQ from "./FAQ"
import Footer from "./Footer"
import Loader from "./Loader"
import { use, useEffect } from "react"

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = "hidden scroll"
  }, [])
  return (
    <>
      {/* <Loader />
      <Hero />
      <AboutPage />
      <Counter />
      <OurProduct /> */}
      <Choose />
      <FAQ />
      {/* <Footer /> */}
    </>
  )
}

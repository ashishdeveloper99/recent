import Link from 'next/link'
import React from 'react'
import { ForwardArrowIcon } from '@/configs/icons'

const AboutMeSection = () => {
  return (
    <section className="mt-24">
      <h3 className="text-2xl md:text-3xl mb-8 text-fore-primary border-b border-b-slate-200 dark:border-b-gray-600 w-fit">
        About Me
      </h3>
      <p className="text-fore-primary mb-8 ">
      Hi, I am a like to developed WebApps, APIs, Desktop Apps mostly using Java and Spring Framework. 
      I believe in Project based Learning. and real life implemention of Projects. as fresher i look for
      opportunity to work as a Java Stack. I like to become a full stack developer.
      currently I try my hands on JAVAscript,React and Docker.</p>
      <p className="text-fore-primary mb-8">
          <b>Please mail me if you want to collabrate with me.  or Hire me </b>
      </p>
      <Link href="/about">
        <a className="flex items-center text-accent underline underline-offset-2 cursor-pointer hover:opacity-70 transition hover:translate-x-1 w-fit">
          <span className="mr-1">
            <ForwardArrowIcon />
          </span>
          Learn more
        </a>
      </Link>
    </section>
  )
}

export default AboutMeSection

import Link from 'next/link'
import React from 'react'
import { ForwardArrowIcon } from '@/configs/icons'

const AboutMeSection = () => {
  return (
    <section className="mt-24">
      <h3 className="text-2xl md:text-3xl mb-8 text-slate-700 border-b border-b-slate-200 dark:border-b-gray-600 w-fit">
      {/* <h3 className="text-2xl md:text-3xl mb-8 text-fore-primary border-b border-b-slate-200 dark:border-b-gray-600 w-fit"> */}
        About Me
      </h3>
      {/* <p className="text-fore-primary mb-8 ">If you are intersted in My Video Introduction Please <a href='https://youtu.be/3MJh2Dm9IgQ'><b><i>click here</i></b></a></p> */}
      <p className="text-fore-primary mb-8 ">
      Hi, I passionate about developing Web Apps, APIs. Currently I am work with codeigniter and in spare time Laravel and on Javascript frameworks such as React, inertiajs etc.
      </p>
      <p className="text-fore-primary mb-8">
        Coming from a background from backoffice jobs and desk jobs, Later in life I found that writing code passionate me. so I look for junior develper or Internship opprtunites.
        currently i m working Mostly with Codeigniter Framework.  but <span className='text-slate-600'>I can build App on Laravel whatever i can develop on Codeigniter.</span>
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

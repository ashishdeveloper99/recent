import Link from 'next/link'
import React from 'react'
import { ForwardArrowIcon } from '@/configs/icons'

const AboutMeSection = () => {
  return (
    <section className="mt-24">
      <h3 className="text-2xl md:text-3xl mb-8 text-fore-primary border-b border-b-slate-200 dark:border-b-gray-600 w-fit">
        About Me
      </h3>
      {/* <p className="text-fore-primary mb-8 ">If you are intersted in My Video Introduction Please <a href='https://youtu.be/3MJh2Dm9IgQ'><b><i>click here</i></b></a></p> */}
      <p className="text-fore-primary mb-8 ">
      Hi, I have developed Web Apps, APIs.I want to improve on Web technologies such as JAVA, Spring, Servlet, Java Server Page(JSP), Mysql, DB..
      </p>
      <p className="text-fore-primary mb-8">
        Coming from a background from Commerce, I quickly found that writing code was a bit like putting the  there&apos;s  Lots Of technologies i Work On.
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

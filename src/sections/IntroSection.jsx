import SocialIcons from '@/components/SocialIcons'
import React from 'react'
import { PaperIcon } from '@/configs/icons'
import Image from 'next/image'
import avatar from '../../public/images/avatar_4.png'

const IntroSection = () => {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row justify-start">
      <div className="flex-1 flex flex-col gap-y-4">
        <h1 className="text-3xl md:text-5xl font-bold max-w-2xl text-fore-primary">
          Hello, I am Ashish
        </h1>
        <div className="flex items-center">
          <a
            // upload your resume either on Cosmic or in the public file of this directory
            href="https://drive.google.com/file/d/1N9qCIlF4njS6tqRxzWDfTcqY97Xea4Ru/view?usp=sharing"
            className="flex items-center mr-4 text-fore-primary border-2 border-accent w-fit px-4 py-1 rounded cursor-pointer hover:text-accent transition-colors"
          >
            <span className="mr-2">
              <PaperIcon />
            </span>
            Resume
          </a>
          <SocialIcons />
        </div>
      </div>
      <div className="w-[80px] sm:w-[186px] relative mb-6 sm:mb-0 rounded-md">
        <Image
          src={avatar}
          alt="Ashish Dhomne"
          height={300}
          width={350}
          quality={80}
          className="rounded-lg"
          placeholder="blur"
        />
      </div>
    </section>
  )
}

export default IntroSection

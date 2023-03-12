import React from 'react'
import { PaperIcon } from '@/configs/icons'
import SocialIcons from '@/components/SocialIcons'
import Image from 'next/image'
import avatar from '../../public/images/avatar_4.png'
import { PageMeta } from '@/components/Meta'
import Layout from '@/components/Layout'
import { getAllPosts } from '@/lib/cosmic'

const About = ({ preview }) => {
  return (
    <>
      <PageMeta
        title="About | Developer Portfolio"
        description="About the developer"
      />
      <Layout preview={preview}>
        <section>
          <h1 className="text-2xl md:text-3xl mb-12 font-bold">About Me</h1>
          <div className="flex flex-col md:flex-row-reverse border-b pb-12">
            <div className="flex-1 relative">
              <Image
                src={avatar}
                alt="Ashish Dhomne"
                quality={85}
                layout="responsive"
                className="rounded-md"
                placeholder="blur"
                priority
              />
            </div>
            <div className="flex-1 mt-12 md:mt-0 flex flex-col justify-start gap-y-8 pr-20">
              <p>I love solving problems!</p>

<p>My name is Ashish. I am interested in applying for the Java Developer position. This role is an exciting opportunity and a challenge that I am eager to take on! I believe that my experience in the field would be a useful addition to your team.</p>
<p>I am certain my skills and qualifications will be of great use to your team.Should you decide to move forward with an interview, please reach out to me! I would be happy to answer any questions you may have and discuss how I can help your company.
besides honing my skills as Spring developer. nowadays I take lessons in Javascript, React technologies.
</p>
<p>
I am open to relocating for the right job. However, I would appreciate the chance to discuss my experience and qualifications over the phone and prove that I am suitable for this role.</p>
              <p>Get in touch to create something awesome together!   </p>

             
              <div className="flex items-center md:mt-6">
                <a
                  href="https://drive.google.com/file/d/1dYOYta5v9BOWmPe8MZuIG3jKAZg3C0dr/view?usp=sharing"
                  
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
          </div>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPosts(preview, 'posts')) || []
  return {
    props: { allPosts, preview },
  }
}

export default About

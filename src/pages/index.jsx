import { getAllPosts } from '@/lib/cosmic'
import IntroSection from '@/sections/IntroSection'
import AboutMeSection from '@/sections/AboutMeSection'
import ToolboxSection from '@/sections/ToolboxSection'
import WorksSection from '@/sections/WorksSection'
import PostsSection from '@/sections/PostsSection'
import ContactSection from '@/sections/ContactSection'
import { PageMeta } from '@/components/Meta'
import Layout from '@/components/Layout'

const Index = ({ allPosts, allWorks, preview }) => {
  return (
    <>
      <PageMeta
        title="Ashishd.online"
        description="Developer Portfolio"
      />
      <Layout preview={preview}>
        <IntroSection />
        <AboutMeSection />
        <ToolboxSection />
        <WorksSection posts={allWorks} />
        <PostsSection posts={allPosts} />
        <ContactSection />
      </Layout>
    </>
  )

}


export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPosts(preview, 'posts', 3)) || []
  const allWorks = (await getAllPosts(preview, 'works', 3)) || []
  return {
    props: { allPosts, allWorks, preview },
  }
}
export default Index

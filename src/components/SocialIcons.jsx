import { EmailIcon, GithubIcon, LinkedinIcon } from '@/configs/icons'

const SocialIcons = () => {
  return (
    <span className="flex gap-x-5">
      <a
        href="mailto:ashishdhomne@hotmail.com       "
        className="group cursor-pointer"
        aria-label="Email"
        title="Email"
      >
        <EmailIcon />
      </a>
      <a
        href="https://github.com/ashishdeveloper99"
        className="group cursor-pointer"
        aria-label="Github"
        title="Github"
      >
        <GithubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/ashish-dhomne/"
        className="group cursor-pointer"
        aria-label="Linkedin"
        title="Linkedin"
      >
        <LinkedinIcon />
      </a>
    </span>
  )
}
export default SocialIcons

// links
import Link from "next/link";

// icons
import { RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiBehanceLine, RiPinterestLine, RiTwitterLine, RiLinkedinLine, RiLinkedinBoxLine, RiLinkedinBoxFill, RiLinkedinFill, RiGithubLine} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'http://youtube.com/@kyusufm'} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>
      <Link href={'http://linkedin.com/in/kyusufm'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinFill />
      </Link>
      <Link href={'http://github.com/kyusufm'} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={'http://instagram.com/kyusuf_muhammad'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={'http://twitter.com/kyusufm'} className="hover:text-accent transition-all duration-300">
        <RiTwitterLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiDribbbleLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiBehanceLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiPinterestLine />
      </Link>
      
    </div>
  );
};

export default Socials;

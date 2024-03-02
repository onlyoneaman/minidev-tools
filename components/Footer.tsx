import Link from "next/link";
import {FaGithub, FaTwitter} from "react-icons/fa";


const Footer = () => {

  return (
    <footer
      className="flex justify-between border-t text-sm p-3"
    >
      <div>
        <p>© 2024</p>
        <p className={"space-x-1"}>
          <span>
            Created by
          </span>
          <a
            className="underline"
            target="_blank"
            href="https://amankumar.ai"
          >
            Aman
          </a>
          <a
            href="https://twitter.com/onlyoneaman"
            target="_blank"
          >
            <FaTwitter className="inline" />
          </a>
          <a
            target="_blank"
            href="https://github.com/onlyoneaman/mini-tools"
          >
            <FaGithub className="inline" />
          </a>
        </p>
      </div>
      <div>
        <Link href={"/about"}>
          About
        </Link>
      </div>
    </footer>
  )
};

export default Footer;

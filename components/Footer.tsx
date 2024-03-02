import Link from "next/link";
import {FaGithub, FaTwitter} from "react-icons/fa";
import {Label} from "@/components/ui/label";

const Footer = () => {

  const footerLinks = [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "About",
      href: "/about"
    },
    {
      title: "Privacy Policy",
      href: "/privacy-policy"
    },
    {
      title: "Terms of Service",
      href: "/terms-of-service"
    }
  ]

  return (
    <footer
      className="flex justify-between items-center border-t text-sm p-3"
    >

      <div>
        <Link
          className={"font-bold tracking-wider text-md hover:underline"}
          href="/"
        >
          minidev.tools
        </Link>
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
            <FaTwitter className="inline"/>
          </a>
          <a
            target="_blank"
            href="https://github.com/onlyoneaman/minidev-tools"
          >
            <FaGithub className="inline"/>
          </a>
        </p>
      </div>

      <div>
        <Label
          className="font-bold tracking-wider text-md"
        >
          Links
        </Label>
        <ul>
          {
            footerLinks.map((link) => (
              <li
                key={link.title}
              >
                <Link
                  className="hover:underline"
                  href={link.href}
                >
                  {link.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </footer>
  )
};

export default Footer;

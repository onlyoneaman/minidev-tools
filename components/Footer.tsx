import Link from "next/link";

const Footer = () => {

  return (
    <footer
      className="flex justify-between border-t text-sm p-3"
    >
      <div>
        <p>© 2024</p>
        <span>
          Created by <a className="underline" target="_blank" href="https://twitter.com/onlyoneaman">Aman</a>
            &nbsp;|&nbsp;<a target="_blank" href="https://github.com/onlyoneaman/mini-tools">Github</a>
        </span>
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

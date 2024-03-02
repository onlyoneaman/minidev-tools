import Link from "next/link";
import {ModeToggle} from "@/components/ModeToggle";
import GitHubButton from 'react-github-button'

const Header = () => {

  return (
    <header
      className="container px-1"
    >
      <div className={"flex justify-between items-center"}>
        <div>
          <Link
            className="text-2xl font-bold hover:underline"
            href="/"
          >
            minidev.tools
          </Link>
        </div>

        <div className={"flex items-center justify-center gap-3"}>
          <GitHubButton
            type="stargazers"
            namespace="onlyoneaman"
            repo="minidev-tools"
            size="large"
          />
          <ModeToggle/>
        </div>
      </div>
    </header>
  )
};

export default Header;

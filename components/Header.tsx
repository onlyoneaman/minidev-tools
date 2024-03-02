import Link from "next/link";
import {ModeToggle} from "@/components/ModeToggle";

const Header = () => {

  return (
    <header
      className="container"
    >
      <div className={"flex justify-between items-center"}>
        <div>
          <Link
            className="text-2xl font-bold hover:underline"
            href="/"
          >
            miniTools
          </Link>
        </div>

        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
};

export default Header;

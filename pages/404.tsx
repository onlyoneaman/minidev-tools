import Link from "next/link";
import {Metadata} from "next";
import SEO from "@/components/SEO";

const pageMetadata: Metadata = {
  title: "Not Found",
}

const NotFoundPage = () => {

  return (
    <div
      className={"h-full flex justify-center items-center text-center"}
    >
      <SEO title={pageMetadata.title} />
      <div className={""}>
        <h2>
          You seem to be lost
        </h2>
        <Link
          href={"/"}
          className={"underline"}
        >
          Go back home
        </Link>
      </div>
    </div>
  )
};

export default NotFoundPage;

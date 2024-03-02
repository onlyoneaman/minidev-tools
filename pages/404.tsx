import Link from "next/link";

const NotFoundPage = () => {

  return (
    <div
      className={"h-full flex justify-center items-center text-center"}
    >
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

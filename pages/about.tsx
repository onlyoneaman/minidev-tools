import {Metadata} from "next";
import SEO from "@/components/SEO";

const pageMetadata: Metadata = {
    title: "About MiniDev Tools",
}

const About = () => {

  const features = [
    "Minimal User Interface",
    "Ad Free Experience",
    "Lightning Speed",
    "Community First"
  ]

  return (
    <div className={"space-y-2"}>
      <SEO title={pageMetadata.title} />
      <h2
        className={"text-lg font-bold"}
      >
        {String(pageMetadata.title)}
      </h2>
      <div className={"space-y-1"}>
        <p className={"space-x-1"}>
          <span>
            MiniDev.tools is an open source project. You can find the source code on
          </span>
          <a
            className={"underline"}
            href={"https://github.com/onlyoneaman/minidev-tools"}
            target={"_blank"}
          >
            Github
          </a>
        </p>
        <p>
          Productivity is a valuable commodity today. As a result, companies spend
          thousands of dollars on improving and managing productivity.
        </p>
        <p>
          MiniDev Tools is an attempt towards improving the same.
          We come across many problems that are easily solvable via multiple tools.
          the problem is that these tools are scattered across web, behind paywalls,
          disturbing ads and with complex UI.
        </p>
        <p>
          MiniDev Tools is trying to break the pattern by
          <ul
            className={"list-disc ml-5"}
          >
            {
              features.map((feature) => (
                <li key={feature}>
                  {feature}
                </li>
              ))
            }
          </ul>
        </p>

        <p className={"space-x-1"}>
          Any tool missing or something new you would like to be added, or any feedback
          Reachout <a className="underline" href="mailto:2000.aman.sinha@gmail.com">here</a>, or raise a Github Issue
          <a className="underline" href="https://github.com/onlyoneaman/minidev-tools" target="_blank">here</a>
        </p>
      </div>
    </div>
  )
};

export default About;

const About = () => {

  const features = [
    "Minimal User Interface",
    "Ad Free Experience",
    "Lightning Speed",
    "Community First"
  ]

  return(
    <div className={"space-y-2"}>
      <h2
        className={"text-lg font-bold"}
      >
        About Mini Tools
      </h2>
      <div className={"space-y-1"}>
        <p>
          Productivity is a valuable commodity today. As a result, companies spend
          thousands of dollars on improving and managing productivity.
        </p>
        <p>
          Mini Tools is an attempt towards improving the same.
          We come across many problems that are easily solvable via multiple tools.
          the problem is that these tools are scattered across web, behind paywalls,
          disturbing ads and with complex UI.
        </p>
        <p>
          Mini Tools is trying to break the pattern by
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
          <a className="underline" href="https://github.com/onlyoneaman/mini-tools" target="_blank">here</a>
        </p>
      </div>
    </div>
  )
};

export default About;

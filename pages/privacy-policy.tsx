const PrivacyPolicy = () => {

  return (
    <div>
      <p>
        Privacy Policy for Mini Tools
      </p>

      <p>
        Last Updated: 2024-03-03
      </p>

      <div>
        <p>
          Introduction
          {
            `
            At Mini Tools ("we", "us", "our"), we respect your privacy and are committed to protecting it through our
          compliance with this policy. This policy describes the types of information we may collect from you or that you
          may provide when you use our Mini Tools application ("App") and our practices for collecting, using,
          maintaining, protecting, and disclosing that information.
            `
          }
        </p>

        <br />

        <p>
          Please read this policy carefully to understand our policies and practices regarding your information and how we
          will treat it. By accessing or using this App, you agree to this privacy policy.
        </p>

        <p>
          Information We Collect
          Our App does not collect any personal information from its users. We believe in simplicity and transparency, and
          we are dedicated to protecting your privacy while you use our App.
        </p>

        <p>
          Analytics Data
          We collect analytics data to improve the functionality and user experience of our App. This data may include
          information about how you use our App, the frequency of your usage, and general engagement metrics. We use tools
          like Google Analytics to help understand the usage pattern of our users, but no personally identifiable
          information is collected in this process.
        </p>

        <p>
          {
            `
            Use of Information
          The analytics data collected is used solely for improving the App and enhancing the user experience. We analyze
          the data to identify usage trends, measure the effectiveness of any changes or improvements, and to ensure the
          App's stability and security.
            `
          }
        </p>

        <p>
          Sharing of Information
          We do not share, sell, rent, or trade user data with third parties for their commercial purposes.
        </p>

        <p>
          Data Security
          We implement measures designed to protect the data collected through our App. However, the transmission of
          information via the internet is not completely secure. Although we do our best to protect your information, we
          cannot guarantee the security of your data transmitted to our App.
        </p>

        <p>
          Changes to Our Privacy Policy
          We may update our Privacy Policy from time to time. If we make changes, we will notify you by revising the date
          at the top of the policy and, in some cases, we may provide additional notice (such as adding a statement to our
          App).
        </p>

        <p
          className="space-x-1"
        >
          <span>
            Contact Information
            To ask questions or comment about this privacy policy and our privacy practices, you may contact us at:
          </span>
          <a
            className="underline"
            href="mailto:2000.aman.sinha@gmail.com"
            target="_blank"
          >
            2000.aman.sinha@gmail.com
          </a>
        </p>

        <p>
          By using Mini Tools, you consent to our Privacy Policy.
        </p>
      </div>
    </div>
  )
};

export default PrivacyPolicy;

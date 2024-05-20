import "./index.css";

export default function PrivacyPolicyPage() {
  return (
    <section class="policyContent">
      <h1 class="header">Privacy Policy</h1>

      <div class="contentSection">
        <h2>Blitz</h2>
        <p>
          Blitz Wallet, LLC created the Blitz app as a free app and generates no
          revenue from usage. The Service for the app is provided by Blitz
          Wallet LLC at no cost and is intended for use as is.
        </p>
      </div>
      <div class="contentSection">
        <h2>Information Collection</h2>
        <p class="mb_p">
          The Blitz Wallet app does not use any third-party services to collect
          information. However, Blitz Wallet the website does use Google
          Analytics to understand traffic sources and user base to better
          position the website to reach as many people as possible.
        </p>
        <p class="mb_p">
          Here is a link to Google Analytics
          <a
            target="_blank"
            href="https://support.google.com/analytics/answer/7318509?hl=en"
          >
            Privacy Policy
          </a>
        </p>
        <p class="mb_p bld_p">Personal information: None</p>
        <p class="bld_p">Cookies: None</p>
      </div>
      <div class="contentSection">
        <h2>Security</h2>
        <p>
          Blitz Wallet is self-custodial which means that only you have access
          to your funds. When creating an account, you will receive a 12-word
          seed phrase which is stored on IOS keychain or Android Keystore
          depending on the operation system you use. Because your seed phrase is
          stored online, Blitz is considered a hot wallet and cannot be
          considered 100% secure.
        </p>
      </div>
      <div class="contentSection">
        <h2>Third party links</h2>
        <p>
          Blitz Wallet links to multiple third-party websites. When you click on
          a link, you will be pushed off the Blitz Wallet app to their page.
          Blitz Wallet does not control any of these third-party websites. It is
          recommended that if you use any of these sites you should read their
          Privacy Policies. Since Blitz does not control these sites, we have no
          control over and assume no responsibility for the content, or
          practices of these sites.
        </p>
      </div>
      <div class="contentSection">
        <h2>Application permissions</h2>
        <h3>Camera Access</h3>
        <p class="permission_p">
          To scan lightning payment requests, Blitz needs access to your camera.
        </p>
        <h3>Network Access</h3>
        <p class="mb_p">This is necessary for:</p>
        <ul>
          <li>- Connection to the Breez SDK</li>
          <li>- Connection to Boltz API</li>
          <li>- Link to third-party sites</li>
        </ul>
        <h3>Notifications</h3>
        <p>
          To give the user a more seamless experience of the lighting network,
          you will occasionally receive push notifications. For example, if your
          app is in the background or not on. Blitz uses Apple Push
          Notifications and the Google Firebase Cloud Messaging service to
          fulfill this requirement.
        </p>
      </div>
      <div class="contentSection">
        <h2>Contact Us</h2>
        <p>
          If you have any questions regarding our Privacy Policy, please reach
          out to contact us.
        </p>
      </div>
    </section>
  );
}

import "./footer.css";
import FooterLists from "./footerComponents/footerLists";

export default function Footerlist() {
  return (
    <div className="content">
      <div className="column">
        <FooterLists
          listItems={[
            { href: "/blitz", name: "Blitz Wallet" },
            { href: "/blitz/future", name: "The Future" },
            { href: "/blitz/philosophy", name: "Philosophy" },
            { href: "/blitz/technology", name: "Technology" },
          ]}
        />
        <FooterLists
          listItems={[
            { href: "/latestAdvancements", name: "Latest Advancements" },
            { href: "/latestAdvancements/contacts", name: "Contacts" },
            {
              href: "/latestAdvancements/savingsAccount",
              name: "Savings account",
            },
            { href: "/latestAdvancements/appStore", name: "Appstore" },
          ]}
        />
      </div>
      <div className="column">
        <FooterLists
          listItems={[
            { href: "/safety", name: "Safety" },
            { href: "/safety/Seedphrase", name: "Seedphrase" },
            { href: "/safety/data", name: "Data" },
          ]}
        />
      </div>
      <div className="column">
        <FooterLists
          listItems={[
            { href: "/company", name: "Company" },
            { href: "/company/aboutUs", name: "About us" },
            { href: "/company/news", name: "news" },
            { href: "/company/team", name: "team" },
            { href: "/company/sponsors", name: "sponsors" },
            {
              href: "/company/corporateAccounts",
              name: "Corporate accounts",
            },
          ]}
        />
      </div>
      <div className="column">
        <FooterLists
          listItems={[
            { href: "/terms&polocies", name: "Terms & Policies" },
            {
              href: "/terms&polocies/terms",
              name: "Terms and Conditions",
            },
            { href: "/terms&polocies/policy", name: "Privacy policy" },
            { href: "/terms&polocies/license", name: "license" },
          ]}
        />
      </div>
    </div>
  );
}

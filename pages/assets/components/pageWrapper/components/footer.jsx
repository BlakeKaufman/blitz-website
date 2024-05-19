import "./footer.css";
import FooterLists from "./footerComponents/footerLists";

export default function Footer() {
  return (
    <div className="content">
      <div className="column">
        <FooterLists
          listItems={[
            { href: "pages/blitz", name: "Blitz Wallet" },
            { href: "pages/blitz/future", name: "The Future" },
            { href: "pages/blitz/philosophy", name: "Philosophy" },
            { href: "pages/blitz/technology", name: "Technology" },
          ]}
        />
        <FooterLists
          listItems={[
            { href: "pages/latestAdvancements", name: "Latest Advancements" },
            { href: "pages/latestAdvancements/contacts", name: "Contacts" },
            {
              href: "pages/latestAdvancements/savingsAccount",
              name: "Savings account",
            },
            { href: "pages/latestAdvancements/appStore", name: "Appstore" },
          ]}
        />
      </div>
      <div className="column">
        <FooterLists
          listItems={[
            { href: "pages/safety", name: "Safety" },
            { href: "pages/safety/Seedphrase", name: "Seedphrase" },
            { href: "pages/safety/data", name: "Data" },
          ]}
        />
      </div>
      <div className="column">
        <FooterLists
          listItems={[
            { href: "pages/company", name: "Company" },
            { href: "pages/company/aboutUs", name: "About us" },
            { href: "pages/company/news", name: "news" },
            { href: "pages/company/team", name: "team" },
            { href: "pages/company/sponsors", name: "sponsors" },
            {
              href: "pages/company/corporateAccounts",
              name: "Corporate accounts",
            },
          ]}
        />
      </div>
      <div className="column">
        <FooterLists
          listItems={[
            { href: "pages/terms&polocies", name: "Terms & Policies" },
            {
              href: "pages/terms&polocies/terms",
              name: "Terms and Conditions",
            },
            { href: "pages/terms&polocies/policy", name: "Privacy policy" },
            { href: "pages/terms&polocies/license", name: "license" },
          ]}
        />
      </div>
    </div>
  );
}

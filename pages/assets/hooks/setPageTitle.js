import { useEffect } from "react";

export default function setPageTitle(pageTitle) {
  useEffect(() => {
    document.title = pageTitle;
  }, []);
}

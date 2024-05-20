export default function FooterLists({ listItems }) {
  return (
    <ul className="footerList">
      {listItems.map((item, index) => {
        return (
          <>
            {index === 0 ? (
              <li className="footerItem">{item.name}</li>
            ) : (
              <li className="footerItem">
                <a href={item.href}>{item.name}</a>
              </li>
            )}
          </>
        );
      })}
    </ul>
  );
}

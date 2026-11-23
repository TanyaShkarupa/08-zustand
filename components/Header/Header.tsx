import Link from "next/link";

import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/" className={css.logo}>
        NoteHub
      </Link>

      <nav className={css.navigation}>
        <Link href="/">Home</Link>
        <Link href="/notes/filter/all">Notes</Link>
      </nav>
    </header>
  );
};

export default Header;

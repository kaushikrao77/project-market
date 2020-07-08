import React from "react";
import { Link } from "gatsby";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <div className={styles.Header}>
      <div>
        <Link to="/">
          <img className={styles.logo} src={"/firmLogo.png"} alt="logo" />
        </Link>
      </div>
    </div>
  );
}

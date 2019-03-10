import React from "react";
import styles from "./Header.module.scss";
import brand from "../../img/SignatureBlackBG.gif";

import Hamburger from "./hamburger";

export default class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.brand_logo}>
          <img alt="Pedro Lima e Silva" src={brand} />
        </div>
        <Hamburger />
      </header>
    );
  }
}

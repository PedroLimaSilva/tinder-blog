import React from "react";
import styles from "./Hamburger.module.scss";

import cn from "classnames";

export default class Hamburger extends React.Component {

  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <button
        class={cn(
          styles.hamburger,
          styles.hamburger_squeeze,
          {
            [styles.is_active]: this.state.open,
          }
        )}
        onClick={this.handleClick}
        type="button"
      >
        <div class={styles.hamburger_box}>
          <div class={styles.hamburger_inner} />
        </div>
      </button>
    );
  }
}

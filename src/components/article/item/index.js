import React from "react";
import styles from "./Item.module.scss";

import cn from "classnames";

class Item extends React.Component {
  render() {
    const { title, coverUrl, subtitle } = this.props.article;
    const { height } = this.props;
    const backgroundUrl = coverUrl + '?' + new Date().getTime() + Math.random()*3;
    const background = { backgroundImage: `url(${backgroundUrl})` };

    return (
      <div
        className={cn(
          styles.item,
          {
            [styles[`size_${height}`]]: true
          },
        )}
        style={background}
      >
        <h5 className={styles.title}><span>{title}</span></h5>
        {
          subtitle &&
          <p className={styles.subtitle}><span>{subtitle}</span></p>
        }
      </div>
    );
  }
}

export default Item;

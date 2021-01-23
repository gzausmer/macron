import React from "react";
import styles from "./keyboard.module.scss";
import classNames from "classnames";

export function Keyboard() {
  return (
    <div>
      <ul className={styles.key_wrapper}>
        <li className={styles.white} />
        <li className={styles.black} />
        <li className={classNames(styles.white, styles.add_margin)} />
        <li className={styles.black} />
        <li className={classNames(styles.white, styles.add_margin)} />
        <li className={styles.black} />
        <li className={classNames(styles.white, styles.add_margin)} />
        <li className={styles.white} />
        <li className={styles.black} />
        <li className={classNames(styles.white, styles.add_margin)} />
        <li className={styles.black} />
        <li className={classNames(styles.white, styles.add_margin)} />
      </ul>
    </div>
  );
}

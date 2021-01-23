import React from "react";
import styles from "./keyboard.module.scss";
import { useAuth0 } from "@auth0/auth0-react";
import classNames from "classnames";

export function Keyboard() {
  const { user } = useAuth0();
  console.log({ user });

  return (
    <div>
      {user?.picture && (
        <div>
          <img
            src={user?.picture}
            alt={"no"}
            className={styles.profile_container}
          />
        </div>
      )}
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

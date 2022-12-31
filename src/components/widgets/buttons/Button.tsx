import React from "react";
import Link from "@docusaurus/Link";
import styles from "./Button.module.css";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.button}>
      <Link className="button button--secondary button--lg" to="/docs/intro">
        {children}
      </Link>
    </div>
  );
};

export default Button;

import React from "react";
import styles from "./BeautySentence.module.css";

const BeautySentence = ({ children }) => {
  return <span className={styles.beauty}>{children}</span>;
};

export default BeautySentence;

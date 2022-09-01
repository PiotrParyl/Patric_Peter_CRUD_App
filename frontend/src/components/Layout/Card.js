import styles from "./Card.module.css";

export const Card = ({ children, className }) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

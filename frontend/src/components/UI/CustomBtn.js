import styles from "./CustomBtn.module.css";

export const CustomBtn = ({ children, className, type }) => {
  return (
    <button className={`${styles.btn} ${className}`} type={type || "button"}>
      {children}
    </button>
  );
};

import styles from "./CustomBtn.module.css";

export const CustomBtn = ({ children, className, type, onClick }) => {
  return (
    <button
      className={`${styles.btn} ${className}`}
      type={type || "button"}
      onClick={onClick || null}
    >
      {children}
    </button>
  );
};

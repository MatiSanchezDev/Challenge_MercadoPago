import styles from "../styles/Loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.div_container}>
      <span className={styles.loader}></span>
    </div>
  );
};

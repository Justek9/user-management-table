import styles from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => {
  return (
    <div className={`${styles.loadingScreen}`}>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
};

export default LoadingSpinner;
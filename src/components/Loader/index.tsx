import { FC } from "react";
import styles from "./style.module.scss";

const Loader: FC = () => (
  <div className={styles.loader}>
    <svg height="100" width="100" viewBox="0 0 100 100">
      <circle className={`${styles.svg} ${styles.bg}`} cx="50" cy="50" r="45" />
      <circle
        className={`${styles.svg} ${styles.animate}`}
        cx="50"
        cy="50"
        r="45"
      />
    </svg>
    <h3 className={styles.text}>Загрузка ...</h3>
  </div>
);

export default Loader;

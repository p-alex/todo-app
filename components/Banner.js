import styles from "../styles/Banner.module.scss";
export default function Banner({ children }) {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: "url(/images/bg-desktop-light.jpg)" }}
    >
      <div className={styles.banner_container}>{children}</div>
    </div>
  );
}

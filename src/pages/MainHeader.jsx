import styles from "../styles/MainHeader.module.css";

// eslint-disable-next-line react/prop-types
const MainHeader = ({ label }) => {
  console.log("mainLabel", label);

  // view
  return (
    <div className={styles.DivOuter}>
      <div className={styles.Header}>{label}</div>
    </div>
  );
};

export default MainHeader;

import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = props => {
  return (
    <div>
      <div className={styles.profileBackground}>
        <img src="https://cdn.guidingtech.com/imager/assets/2019/05/227363/crop-picture-shapes-online-fi_4d470f76dc99e18ad75087b1b8410ea9.jpg?1559046829" />
      </div>
      <div className={styles.descriptionBlock}>ava + disc</div>
    </div>
  );
};

export default ProfileInfo;

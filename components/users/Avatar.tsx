import Image from "next/image";
import React from "react";

import styles from "./Avatars.module.css";

const Avatar = ({
  src,
  name,
  otherStyles,
}: {
  src: string;
  name: string;
  otherStyles: string;
}) => {
  return (
    <div
      className={` ${styles.avatar} ${otherStyles} h-9 w-9`}
      data-tooltip={name}
    >
      <Image
        src={`https://liveblocks.io/avatars/avatar-${Math.floor(
          Math.random() * 30
        )}.png`}
        alt="avatar"
        fill
        className={styles.avatar_picture}
      />
    </div>
  );
};

export default Avatar;

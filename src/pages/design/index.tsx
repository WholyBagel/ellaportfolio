import { NextPage } from "next";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/egParallax.module.css";
import StaticallyImportedImage from "../../../public/img/02f.jpg";

const DesignIndex:NextPage = () => {
    const [accelerator, setAccelerator] = useState(0.5);
  const [imgOffset, setImgOffset] = useState(0);

  const handleScroll = () => setImgOffset(window.pageYOffset);
  useEffect(() => {
    // You may want to throttle this. Might not need to though.
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // You can add the style directly. I just have the parallax as a client config so it's easy to have conditions here to include or omit it.
  const attrs = {
    style: { transform: `translateY(${imgOffset * accelerator}px)` },
  };

    return (
        <main>
        <div className={styles["image-wrap"]} >
        <Image
            src={StaticallyImportedImage}
            className={styles["image-component"]}
            fill
            alt="Peacock with tail fanned out."
        />
        </div>

        <div className={styles["massive"]}>
            <p>Srollin’,</p>
            <p>scrollin’,</p>
            <p>scrollin’...</p>
            <p>:)</p>
        </div>
        </main>
    );
}

export default DesignIndex
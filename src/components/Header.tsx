import Link from 'next/link';
import Image from "next/image";
import styles from "../styles/egParallax.module.css";
import StaticallyImportedImage from "../../public/img/02f.jpg";



export const Header:React.FC = () => {
    return (
    <div className={styles["image-wrap"]} >
        <Link href="/">Home   </Link>
        <Link href="/design">Design   </Link>
        <Image
            src={StaticallyImportedImage}
            className={styles["image-component"]}
            fill
            alt="Peacock with tail fanned out."
        />
    </div>
    );
}
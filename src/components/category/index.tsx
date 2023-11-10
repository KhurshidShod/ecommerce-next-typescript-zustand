import Image from "next/image";
import styles from "./Category.module.scss";
import Img from "../../assets/images/log-reg.png";

const CategoryCard = ({color, name, image}: {color: string, name: string, image: {url: string}}) => {
  return (
    <div className={styles.category_card}>
      <div style={{
        backgroundColor: `#${color}`
      }}>
        <Image src={image?.url} alt="asd" width={200} height={200} />
      </div>
      <p style={{
        color: `#${color}`
      }}>{name}</p>
    </div>
  );
};

export default CategoryCard;

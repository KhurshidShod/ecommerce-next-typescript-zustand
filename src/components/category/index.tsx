import Image from "next/image";
import styles from "./Category.module.scss";
import Img from "@/assets/images/No-Image-Placeholder.svg";
import Link from 'next/link'

const CategoryCard = ({
  _id,
  color,
  name,
  image,
}: {
  _id: string;
  color: string;
  name: string;
  image: { url: string };
}) => {
  return (
    <Link href={`/allproducts?category=${_id}`} className={styles.category_card}>
      <div
        style={{
          backgroundColor: `#${color}`,
        }}
      >
        <Image
          src={image?.url ? image?.url : Img}
          alt="asd"
          width={200}
          height={200}
        />
      </div>
      <p
        style={{
          color: `#${color}`,
        }}
      >
        {name}
      </p>
    </Link>
  );
};

export default CategoryCard;

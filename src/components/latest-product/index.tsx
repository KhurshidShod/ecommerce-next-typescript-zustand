import styles from "./LatestProduct.module.scss";
import Img from "../../assets/images/log-reg.png";
import Image from "next/image";

const LatestProduct = ({
  title,
  description,
  price,
  quantity,
  sold,
  image,
}: {
  title: string;
  description: string;
  price: string;
  quantity: number;
  sold: number;
  image: {
    url: string
  };
}) => {
  return (
    <div className={styles.latest_product}>
      <div className={styles.latest_product__image}>
        <Image src={image?.url} alt="Product Photo" width={200} height={200} />
      </div>
      <div className={styles.latest_product__info}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          <p>
            <b>Available: </b>{quantity}
          </p>
          <p>
            <b>Sold: </b>{sold}
          </p>
        </div>
      </div>
      <button>Buy - {price}</button>
    </div>
  );
};

export default LatestProduct;

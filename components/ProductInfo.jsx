import Image from "next/image";
import Styles from "./ProductInfo.module.css";

export default function ProductInfo({productDetail}) {
  return (
    <div className={Styles.container}>
      <div>
        <Image src={productDetail.imageUrl} width='300' height='300' alt={productDetail.name} />
      </div>
      <div className={Styles.description}>
        <p>name: {productDetail.name}</p>
        <p>price: {productDetail.price}</p>
        <button>장바구니에 담기</button>
      </div>
    </div>
  )
}

import Image from "next/image";
import Styles from "./ProductInfo.module.css";
import { useRouter } from "next/router";

export default function ProductInfo({productDetail}) {
  const router = useRouter();

  const addCart = () => {
    // 1. 장바구니에 아이템 추가 

    //2.장바구니로 이동
    router.push('/cart');
  } 

  return (
    <div className={Styles.container}>
      <div>
        <Image src={productDetail.imageUrl} width='300' height='300' alt={productDetail.name} />
      </div>
      <div className={Styles.description}>
        <p>name: {productDetail.name}</p>
        <p>price: {productDetail.price}</p>
        <button onClick={addCart}>장바구니에 담기</button>
      </div>
    </div>
  )
}

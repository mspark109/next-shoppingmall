import { fetchProducts } from "@/api";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Style from "./ProductList.module.css"

function ProductList() {
  const [products, setProducts] = useState();

  // 리액트 컴포넌트 렌더링 직후 추가적으로 취할 동작 정의
  useEffect(() => {
    fetchProducts().then(res => {
      setProducts(res.data);
    })
  }, []); // useEffect를 렌더링 직후 한 번만 실행한다고 하면, 뒤에 빈배열을 넣어줘야 한다.

  return (
    <ul>
      {products && products.map(product => {
        return (
          <Link href={`/products/${product.id}`}>
            <li key={product.id} className={Style.item}>
              <Image src={product.imageUrl} width='300' height='300' alt={product.name} />
              <div>{product.name}</div>
            </li> 
          </Link>)
      })}
    </ul>
  )
}

export default ProductList;
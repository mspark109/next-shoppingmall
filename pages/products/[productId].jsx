import { fetchProduct, fetchProductById } from '@/api';
import ProductHeader from '@/components/ProductHeader';
import ProductInfo from '@/components/ProductInfo';
import React from 'react'

export default function ProductDetailPage({productDetail}) {
  return (
    <>
      <ProductHeader title="상품 상세페이지" />
      <ProductInfo productDetail={productDetail} />
    </>
  )
}

/*
*getServerSideProps
*페이지 컴포넌트를 그리기 전에 데이터를 받아오기 위한 데이터 호출 메서드
* Props를 내려주는 역할을 한다. 
** 서버에서 실행되므로 window객체에 접근 불가. console.log불가 
*/

export async function getServerSideProps(context) {

  console.log('## productId : ', context.params.productId);
  const id = context.params.productId;
  // const response = await axios.get(`http://localhost:4000/products/${id}`);
  const response = await fetchProductById(id);
// == const { data } = await fetchProductById(id);

  // context.req.headers['user-agent']; // 사용자의 접속 디바이스 정보 

  return {
    props: {
      productDetail : response.data
    }
  }
}

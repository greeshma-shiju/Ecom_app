import React from 'react'
import { ProductsService } from '@/app/services/product-services';
import { Metadata } from 'next';
export async function generateMetadata(props:any){
  console.log("generateMetadata:",props);
   const productId =props.params.productId;
  var product;
  if(productId)
  {
     product = await ProductsService.getProductById(productId);
  
  return{
    title:product.title
  }}
  return{
    title:"prod detail page"
  }
}

export default  async function ProductDetail(props:any) {
  console.log(props);
  const productId =props.params.productId;
  var product;
  if(productId){
    product = await ProductsService.getProductById(productId);
  }
  return (
    <div> <h3>
      {product.title}
      </h3></div>
  )
}

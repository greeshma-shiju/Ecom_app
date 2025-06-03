import React, { Suspense } from 'react'
import ProductCard from '../components/product-card/ProductCard';
import { ProductsService } from '../services/product-services';
import GotoCartButton from '../components/GotoCartButton';
import Link from 'next/link';
import ProductList from '../components/ProductList';
import { Metadata } from 'next';
import { cookies } from 'next/headers'
import { headers } from 'next/headers'

export const metadata: Metadata ={
  title:"Productlist  Page"
}
export default async function Products(props:any) {
  console.log("Products page excecuted",props);
  const cookieList= cookies();
  const tokenCookie =cookieList.get('authToken');
  console.log("token cookie:",tokenCookie, tokenCookie?.value);
//reading headers
const headerList=headers();
const referer = headerList.get('referer');
console.log("referer:",referer);
console.log(headerList.get('User-Agent'));
console.log(headerList.get('Host'));




  // var products = await ProductsService.getProducts();

  return (
    <div>
      <GotoCartButton/>
    <h3>Product List</h3>
    <Link href="#recommended">Goto Recommended Section</Link>
    
   
  <Suspense fallback={<span style={{color:'red'}}>Loading</span>}>
     <ProductList/>
  </Suspense>
    {/* <div>
      {
        products.map((p:any)=>{
          return <ProductCard key={p.id} product={p}/>
         
        
        })
      }
    </div> */}
    <h3 id="recommended">Recommended Products</h3>
    </div>
  )
}

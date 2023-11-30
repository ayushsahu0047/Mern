import React from 'react'

const Shopcart = () => {

 const product =[
  {
  id:1,
  title:'Apple i Pjone 15 Pro',
  description:'FORGED IN TITANIUM — iPhone 15 Pro Max has a strong and light aerospace-grade ',
  price:79000,
  imageurl:'https://m.media-amazon.com/images/I/81dT7CUY6GL._SX569_.jpg',
  catagory:'Mobiles'
 },
 {
  id:2,
  title:'gionee Max Pro ',
  description:'This product has been professionally inspected and tested to be fully functional by the Sellers.  ',
  price:7000,
  imageurl:'https://m.media-amazon.com/images/I/31pMg1voMCL.jpg',
  catagory:'Mobiles'
 },
 {
  id:3,
  title:'Redmi ',
  description:'MIUI 14 with Android 13 | Side fingerprint |IR blaster | 3.5mm Audio jack | IP53 rating',
  price:11999,
  imageurl:'https://m.media-amazon.com/images/I/41zBUiE9F-L._SX300_SY300_QL70_FMwebp_.jpg',
  catagory:'Mobiles'
 },
 {
  id:4,
  title:'Hp Laptop ',
  description:'6-core AMD Ryzen 5 5500U】Harness efficient multitasking with the AMD Ryzen 5 5500U processor,',
  price:45990,
  imageurl:'https://m.media-amazon.com/images/I/71spiQQj0fL._SY450_.jpg',
  catagory:'laptop'
 },
 {
  id:5,
  title:'Apple i Pjone 15 Pro',
  description:'FORGED IN TITANIUM — iPhone 15 Pro Max has a strong and light aerospace-grade ',
  price:79000,
  imageurl:'https://m.media-amazon.com/images/I/81dT7CUY6GL._SX569_.jpg',
  catagory:'Mobiles'
 },
 {
  id:6,
  title:'gionee Max Pro ',
  description:'This product has been professionally inspected and tested to be fully functional by the Sellers.  ',
  price:7000,
  imageurl:'https://m.media-amazon.com/images/I/31pMg1voMCL.jpg',
  catagory:'Mobiles'
 },
 {
    id:7,
    title:'Samsung Galaxy S22 Ultra 5G ',
    description:'The first Galaxy S with embedded S Pen. Write comfortably like pen on paper, turn quick notes into legible text and use Air Actions to control your phone remotel ',
    price:84999,
    imageurl:'https://www.amazon.in/Samsung-Burgundy-Storage-Additional-Exchange/dp/B09SH7FDKT/?_encoding=UTF8&pd_rd_w=10cPw&content-id=amzn1.sym.7014cbab-3314-4269-8b32-9455cd57afb8&pf_rd_p=7014cbab-3314-4269-8b32-9455cd57afb8&pf_rd_r=SQXJDMYRASS7CXMDWAYP&pd_rd_wg=r8PSf&pd_rd_r=945c7e7f-82a0-488a-95bc-b510d9a922dc&ref_=pd_gw_deals_ct_t1&th=1#:~:text=IMAGES-,Samsung%20Galaxy%20S22%20Ultra%205G%20(Burgundy%2C%2012GB%2C%20256GB%20Storage)%20with%20No,Pattern%20Name%3ASamsung%20Galaxy%20S22%20Ultra%205G',
    catagory:'Mobiles'
   },
 ]

  return (
   <>
  <Product product = {product}> </Product>
  
   </>
  )
}
export default Shopcart
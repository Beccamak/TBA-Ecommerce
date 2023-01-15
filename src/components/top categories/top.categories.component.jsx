import './top.categories.styles.css';
import ProductsHeader from '../products-header/products.header.component';
import Beauty from "../../assets/images/beauty.png";
import Fashion from "../../assets/images/cloth.png";
import Phone from "../../assets/images/laptop.png";
import Watch from "../../assets/images/watch.png";
import Shoe from "../../assets/images/shoe.png";
import { useState } from 'react';

// const topCategoriesProducts = [
//     {   
//         name: "Computer",
//         items: [
//             {   
//                 id: 1,
//                 name: "Samsung A1",
//                 price: "450",
//                 imgUrl: "images/New folder/001_gallery_LC34J791WTNXZA.webp",
//                 additionalDetails:"1000maH red, black"
//             },
//             {
//                 id: 2,
//                 name: "Samsung A1",
//                 price: "450",
//                 imgUrl: "images/New folder/001_gallery_LC34J791WTNXZA.webp",
//                 additionalDetails:"1000maH red, black"
//             },
//             {
//                 id: 3,
//                 name: "Samsung A1",
//                 price: "450",
//                 imgUrl: "images/New folder/001_gallery_LC34J791WTNXZA.webp",
//                 additionalDetails:"1000maH red, black"
//             }

//         ]
//     },
//     {   
//         name: "Electronics",
//         items: [
//             {
//                 id: 1,
//                 name: "Drum",
//                 price: "450",
//                 imgUrl: "images/New folder/drums.jpg",
//                 additionalDetails:"1000maH red, black"
//             },
//             {
//                 id: 2,
//                 name: "Drum",
//                 price: "450",
//                 imgUrl: "images/New folder/download",
//                 additionalDetails:"1000maH red, black"
//             },
//             {
//                 id: 3,
//                 name: "Drum",
//                 price: "450",
//                 imgUrl: "images/New folder/trumpet.jpg",
//                 additionalDetails:"1000maH red, black"
//             },
//             {
//                 id: 4,
//                 name: "Drum",
//                 price: "450",
//                 imgUrl: "images/New folder/wooden-drum.jpg",
//                 additionalDetails:"1000maH red, black"
//             },
//         ]
//     },
//     {     
//         name: "Kitchen", 
//         items: [
//             {
//                 id: 1,
//                 name: "Xiaomi smart band",
//                 price: "450",
//                 imgUrl: "images/New folder/smart-band-7.png",
//                 additionalDetails:"1000maH red, black"
//             },
//             {
//                 id: 2,
//                 name: "Drum",
//                 price: "450",
//                 imgUrl: "images/New folder/smart-band-7.png",
//                 additionalDetails:"1000maH red, black"
//             },
//             {
//                 id: 3,
//                 name: "Drum",
//                 price: "450",
//                 imgUrl: "images/New folder/smart-band-7.png",
//                 additionalDetails:"1000maH red, black"
//             },
//             {
//                 id: 4,
//                 name: "Drum",
//                 price: "450",
//                 imgUrl: "images/New folder/wsmart-band-7.png",
//                 additionalDetails:"1000maH red, black"
//             },
//         ]
//     },
//     {     
//         name: "Phones", 
//     items: [
//         {
//             id: 1,
//             name: "Xiaomi smart band",
//             price: "450",
//             imgUrl: "images/New folder/smart-band-7.png",
//             additionalDetails:"1000maH red, black"
//         },
//         {
//             id: 2,
//             name: "Drum",
//             price: "450",
//             imgUrl: "images/New folder/smart-band-7.png",
//             additionalDetails:"1000maH red, black"
//         },
//         {
//             id: 3,
//             name: "Drum",
//             price: "450",
//             imgUrl: "images/New folder/smart-band-7.png",
//             additionalDetails:"1000maH red, black"
//         },
//         {
//             id: 4,
//             name: "Drum",
//             price: "450",
//             imgUrl: "images/New folder/wsmart-band-7.png",
//             additionalDetails:"1000maH red, black"
//         },
//     ]
//      },
//     {     
//     name: "Kids", 
//     items: [
//     {
//         id: 1,
//         name: "Xiaomi smart band",
//         price: "450",
//         imgUrl: "images/New folder/smart-band-7.png",
//         additionalDetails:"1000maH red, black"
//     },
//     {
//         id: 2,
//         name: "Drum",
//         price: "450",
//         imgUrl: "images/New folder/smart-band-7.png",
//         additionalDetails:"1000maH red, black"
//     },
//     {
//         id: 3,
//         name: "Drum",
//         price: "450",
//         imgUrl: "images/New folder/smart-band-7.png",
//         additionalDetails:"1000maH red, black"
//     },
//     {
//         id: 4,
//         name: "Drum",
//         price: "450",
//         imgUrl: "images/New folder/wsmart-band-7.png",
//         additionalDetails:"1000maH red, black"
//     },
// ]
// }
    
// ]
const TopCategories = () => {
   const [showTopCategory, setShowTopCategory] = useState("");
   const onEnterTopCategory = () => setShowTopCategory(true);
   const onLeaveTopCategory = () => setShowTopCategory(false);
    return(
        <div className='top-categories'>
        <ProductsHeader children='Top Categories' headerType="normal" route="shop-tc"/>

        <div className='top-categories-container'>
            <div className='top-category' onMouseEnter={onEnterTopCategory} onMouseLeave={onLeaveTopCategory}>
            <img className='cat-pic' src={Beauty} alt='Beauty Category'/>
            <p className={`cat-text ${showTopCategory? 'transform':'none'}`} style={{transition: "all 1s linear"}} >Health and Beauty</p>
            console.log(showTopCategory);
            </div>
            <div className='top-category'  onMouseEnter={onEnterTopCategory} onMouseLeave={onLeaveTopCategory}>
            <img className='cat-pic' src={Fashion} alt='Fashion Category' />
            <p className={`cat-text ${showTopCategory? 'transform':'none'}`} style={{transition: "all 1s linear"}} >Fashion</p>
            </div>
            <div className='top-category'  onMouseEnter={onEnterTopCategory} onMouseLeave={onLeaveTopCategory}>
            <img className='cat-pic' src={Phone} alt='Phones & Tablets Category' />
            <p className={`cat-text ${showTopCategory? 'transform':'none'}`} style={{transition: "all 1s linear"}} >Phones &  Tablets</p>
            
            </div>
            <div className='top-category'  onMouseEnter={onEnterTopCategory} onMouseLeave={onLeaveTopCategory}>
            <img className='cat-pic' src={Watch} alt='Wrist watches' />
            <p className={`cat-text ${showTopCategory? 'transform':'none'}`} style={{transition: "all 1s linear"}} >Wrist Watches</p>     
            </div>
            <div className='top-category'  onMouseEnter={onEnterTopCategory} onMouseLeave={onLeaveTopCategory}>
            <img className='cat-pic' src={Shoe}  alt='Shoes' />
            <p className={`cat-text ${showTopCategory? 'transform':'none'}`} style={{transition: "all 1s linear"}} >Heels</p>     
            </div>
        </div>
        </div>
        
    )

}


export default TopCategories;
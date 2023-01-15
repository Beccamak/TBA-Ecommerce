import './top.brands.styles.css';
import ProductsHeader from '../products-header/products.header.component';
import Loius from "../../assets/images/louis.png";
import Samsung from "../../assets/images/samsung.png";
import Laneige from "../../assets/images/laneige.webp";
import Apple from "../../assets/images/apple.png";
import Led from "../../assets/images/led.png";
const TopBrands = () => {
    const topBrands = [
        {   
            name: "Samsung",
            items: [
                {   
                    id: 1,
                    name: "Samsung A1",
                    price: "450",
                    imgUrl: "images/New folder/001_gallery_LC34J791WTNXZA.webp",
                    additionalDetails:"1000maH red, black"
                },
                {
                    id: 2,
                    name: "Samsung A1",
                    price: "450",
                    imgUrl: "images/New folder/001_gallery_LC34J791WTNXZA.webp",
                    additionalDetails:"1000maH red, black"
                },
                {
                    id: 3,
                    name: "Samsung A1",
                    price: "450",
                    imgUrl: "images/New folder/001_gallery_LC34J791WTNXZA.webp",
                    additionalDetails:"1000maH red, black"
                }

            ]
        },
        {   
            name: "Beatz",
            items: [
                {
                    id: 1,
                    name: "Drum",
                    price: "450",
                    imgUrl: "images/New folder/drums.jpg",
                    additionalDetails:"1000maH red, black"
                },
                {
                    id: 2,
                    name: "Drum",
                    price: "450",
                    imgUrl: "images/New folder/download",
                    additionalDetails:"1000maH red, black"
                },
                {
                    id: 3,
                    name: "Drum",
                    price: "450",
                    imgUrl: "images/New folder/trumpet.jpg",
                    additionalDetails:"1000maH red, black"
                },
                {
                    id: 4,
                    name: "Drum",
                    price: "450",
                    imgUrl: "images/New folder/wooden-drum.jpg",
                    additionalDetails:"1000maH red, black"
                },
            ]
        },
        {     
            name: "Xiaomi", 
            items: [
                {
                    id: 1,
                    name: "Xiaomi smart band",
                    price: "450",
                    imgUrl: "images/New folder/smart-band-7.png",
                    additionalDetails:"1000maH red, black"
                },
                {
                    id: 2,
                    name: "Drum",
                    price: "450",
                    imgUrl: "images/New folder/smart-band-7.png",
                    additionalDetails:"1000maH red, black"
                },
                {
                    id: 3,
                    name: "Drum",
                    price: "450",
                    imgUrl: "images/New folder/smart-band-7.png",
                    additionalDetails:"1000maH red, black"
                },
                {
                    id: 4,
                    name: "Drum",
                    price: "450",
                    imgUrl: "images/New folder/wsmart-band-7.png",
                    additionalDetails:"1000maH red, black"
                },
            ]
        },
        {     
            name: "Lumin", 
        items: [
            {
                id: 1,
                name: "Xiaomi smart band",
                price: "450",
                imgUrl: "images/New folder/smart-band-7.png",
                additionalDetails:"1000maH red, black"
            },
            {
                id: 2,
                name: "Drum",
                price: "450",
                imgUrl: "images/New folder/smart-band-7.png",
                additionalDetails:"1000maH red, black"
            },
            {
                id: 3,
                name: "Drum",
                price: "450",
                imgUrl: "images/New folder/smart-band-7.png",
                additionalDetails:"1000maH red, black"
            },
            {
                id: 4,
                name: "Drum",
                price: "450",
                imgUrl: "images/New folder/wsmart-band-7.png",
                additionalDetails:"1000maH red, black"
            },
        ]
         },
        {     
        name: "Nestle", 
    items: [
        {
            id: 1,
            name: "Xiaomi smart band",
            price: "450",
            imgUrl: "images/New folder/smart-band-7.png",
            additionalDetails:"1000maH red, black"
        },
        {
            id: 2,
            name: "Drum",
            price: "450",
            imgUrl: "images/New folder/smart-band-7.png",
            additionalDetails:"1000maH red, black"
        },
        {
            id: 3,
            name: "Drum",
            price: "450",
            imgUrl: "images/New folder/smart-band-7.png",
            additionalDetails:"1000maH red, black"
        },
        {
            id: 4,
            name: "Drum",
            price: "450",
            imgUrl: "images/New folder/wsmart-band-7.png",
            additionalDetails:"1000maH red, black"
        },
    ]
        }
        
    ]

    return(
        <div className='top-brands'>
        <ProductsHeader children='Top Brands' headerType="normal" route="shop-tb"/>

        <div className='top-brands-container'>
            <div className='top-brand'>
            <img className='brand-img' src={Loius}/>
            </div>
            <div className='top-brand laneige'>
            <img className='brand-img' src={Laneige}/> 
            </div>
            <div className='top-brand'>
            <img className='brand-img' src={Samsung}/> 
            </div>
            <div className='top-brand'>
            <img className='brand-img' src={Apple}/> 
            </div>
            <div className='top-brand'>
            <img className='brand-img' src={Led}/> 
            </div>
        </div>
        </div>
        
    )
}



export default TopBrands;


// <div className='top-brands-container'>
//             <ProductsHeader children="Top Brands" headerType='normal' route="shop" onClickHandler={onViewAllHandler}/>
//             <div className='flash-sales-products'>
//             {
//                 topBrands.filter((_, index) => {
//                     return index < 6
//                 }).map((topBrandProduct) => {
//                     return <ProductCard key={topBrandProduct.id} product={topBrandProduct}/>
//                  })
//             }
//             </div>
//         </div>


// {topBrands.map((topBrand) => {
//     return <div className='brand-container' key={topBrand.brand}>
//     <h2 className='brand-name'> {topBrand.brand} </h2>
//     <div className='brand-items-container'>
//     {topBrand.items.map( (item) => {
//             return <div className='brand-item' key={item.id}>
//         {/*<img className='brand-product' src={item.imgUrl} alt={item.name}/>
//         <div className='brand-item-details'>
//             <span>{item.name}</span>
//             <span>{item.price}</span>
//             <span>{item.additionalDetails}</span>
//     </div> */}
//         <ProductCard product={item}  />
//         </div>
//     })}
//     </div>
//     </div>
//     })}
import React from 'react'
import styles from '../../App/App.module.scss'
import css from './ProductPage.module.scss'
import { AiOutlineHeart, AiFillHeart, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/cards/selectors';
import  Loader from '../../components/Loader/Loader';
import { StarRating } from '../../components/StarRatings/StarRatings';
import {fetchProductById} from '../../helpers/api';
import { Suspense } from "react";
import { Outlet, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";


const ProductPage = () => {
    const {productId} = useParams();
    console.log("productId", productId);
    const [product, setProduct] = useState(null);
    const favorites = useSelector(selectFavorites);


    useEffect(() => {
       
        fetchProductById(productId).then(setProduct).catch(error => {
        console.log('Error',error);
        });
        
    }, [productId]);

    if (!product) {
        return;
    }


   console.log("product", product);


    const handleAddOrDeleteFavorite = ({item}) => {
        // if (!isLogged) {
        //   console.log('The user must be logged in to use this functionality!');
        //   return 
          // toast.warn(
          //   'The user must be logged in to use this functionality!'
         // );
       // }
        if (!favorites.find(favorite => favorite.id === item.id)) {
          console.log('This item has been successfully added to favorites!');
          // dispatch(addToFavorite(item._id));
          // toast.success(`This item has been successfully added to favorites!`);
          return;
        }
        console.log('This item was successfully removed from favorites!');
        // dispatch(deleteFromFavorite(item._id));
        // toast.success(`This item was successfully removed from favorites!`);
        return;
      };




const navItems = [
    { href: 'about', text: 'About the product'},
    { href: 'instructions', text: 'Feeding instructions' },
    { href: 'reviews', text: 'Reviews' },
      ];

  return (
<div  className={styles.container}>


<div className={css.product_info}>

<div className={css.product_imgs}>




</div>

<div className={css.product_text}>

<p>{product.name}</p>
<h1 className={css.product_title}>{product.name}</h1>
<StarRating/>

<p className={css.product_price}>$ {product.price}</p>



<div className={css.product_quantity}>


<button type="button" className={css.btn_quantity}><AiOutlineMinus size={13}/></button>
<p></p>
<button type="button" className={css.btn_quantity}><AiOutlinePlus size={13}/></button>

</div>

<div className={css.product_btn}>
<button className={css.btn_add}>Add to card</button>
           {/*  onClickHandler={() => onClickHandler(id)} */}
          
          <button
            onClick={handleAddOrDeleteFavorite}
            className={css.favourite_icon}
          >
              {!favorites.find(favorite => favorite.id === product.id) ? (
              <AiOutlineHeart size={44} />
            ) : (
              <AiFillHeart size={44} />
            )}
          </button>
          </div>
</div>


</div>



               

                <ul className={css.link_list}>
                {navItems.map(({ href,text })=>(<li key={href} className={css.link_item}><NavLink to={href} className={css.link_title}> {text }</NavLink></li>))}
            </ul>

        
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>

</div>

  )
}


export default ProductPage;
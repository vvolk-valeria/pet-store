
import css from './ProductAbout.module.scss'
import {  useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import {fetchProductById} from '../../helpers/api';

const ProductAbout = () => {
  const {productId} = useParams();
  const [product, setProduct] = useState(null);
  

  useEffect(() => {
       
    fetchProductById(productId).then(setProduct).catch(error => {
    console.log('Error',error);
    });
    
}, [productId]);

if (!product) {
    return;
}

const {description, age, productSize, weight, brand, prescription, contraindications} = product;
    return (
  <>
  <div className={css.box}>

<div className={css.box_item_description}>

<h3 className={css.title}>Description</h3>

{ description ? (<p className={css.text}>{description}</p>) :
(<p className={css.text}>No information</p>)}


  </div>

  <div  className={css.box_item_characteristics}>
  <h3 className={css.title}>Characteristics</h3>

<ul className={css.list}>
  <li className={css.list_item}><p className={css.list_item_title}>Age</p><span className={css.line}></span><p className={css.list_item_text}>{age.name}</p></li>
  <li className={css.list_item}><p className={css.list_item_title}>Breed size</p><span className={css.line}></span>{productSize ? (<p className={css.list_item_text}>{productSize}</p>):(<p className={css.list_item_text}>No info</p>)}</li>
  <li className={css.list_item}><p className={css.list_item_title}>Package weight</p><span className={css.line}></span><p className={css.list_item_text}>{weight.name}</p></li>
  <li className={css.list_item}><p className={css.list_item_title}>Brand</p><span className={css.line}></span><p className={css.list_item_text}>{brand}</p></li>
  <li className={css.list_item}><p className={css.list_item_title}>Prescription</p><span className={css.line}></span><p className={css.list_item_text}>{prescription.name}</p></li>
  <li className={css.list_item}><p className={css.list_item_title}>Contraindications</p><span className={css.line}></span><p className={css.list_item_text}>{contraindications}</p></li>
</ul>

  </div>


  </div>
  
  </>
  
    )
  }
  
  
  export default ProductAbout;
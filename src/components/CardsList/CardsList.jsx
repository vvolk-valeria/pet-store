import React from 'react' // Імпортуємо бібліотеку React
import Card from '../Card/Card' // Імпортуємо компонент Card
// import PropTypes from 'prop-types'; // Імпортуємо PropTypes для валідації властивостей компонента
import styles from './CardsList.module.scss' // Імпортуємо стилі для компонента
import { selectCards } from '../../redux/cards/selectors';
//import { useDispatch, useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
//import {cardList} from '../../files/cardList'
//import { useEffect } from 'react';

  // const cards = cardList;
 

//  export const handleSort = event => {
//    // console.log('event', event);

//     switch (event) {
//       case 'price_desc':
//          sortItems = [...cards].sort((a, b) => b.price - a.price);

//         return sortItems;
//       case 'price_asc':
//          sortItems = [...cards].sort((a, b) => a.price - b.price);
     
//         return sortItems;
//       case 'rating_desc':
//          sortItems = [...cards].sort((a, b) => b.rating - a.rating);

//         return sortItems;
//       case 'rating_asc':
//          sortItems = [...cards].sort((a, b) => a.rating - b.rating);

//         return sortItems;
//       default:
//         console.log('Invalid type');
//         sortItems = cards;
//         return sortItems;
//     }
//   };

 
 

const CardsList = () => {
 
 const cards = useSelector(selectCards);

 //console.log('cards:', cards);


//  useEffect(() => {
//   let sortItems;
//   console.log('sortItems', sortItems);
//  },[]);

const {content} = cards;
//console.log('content:', content);

    return (
<>
{/* {console.log('content:l', content.length === 0)} */}
{content ? (
  <ul 
  className={styles.list}
  >
  {content.map(item => {
    return <Card key={item.id} item={item} />;
  })}
</ul>
):(
  <Loader/>
)}
</>
   
    )

}



export default CardsList;

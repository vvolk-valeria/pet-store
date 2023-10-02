import React, { useEffect } from 'react'
import styles from '../App/App.module.scss'
import { fetchCardsList } from '../store/cards/actions'
import CardsList from '../components/CardsList/CardsList'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavourites, removeFavourites } from '../store/favourites/actions'
import { addToCart } from '../store/cart/actions'
import Loader from '../components/Loader/Loader'

const Catalog = () => {
  // Використовуємо useSelector для отримання деяких станів з Redux store.
  const isLoading = useSelector(({ cards }) => cards.isLoading) // Завантаження
  const cardsList = useSelector(({ cards }) => cards.cards) // Список карток
  const cardsInFavorites = useSelector(({ favourites }) => favourites) // Список улюблених карток
  const hasError = useSelector(({ hasError }) => hasError) // Помилка
  const dispatch = useDispatch() // useDispatch дозволяє викликати actions у Redux store.

  useEffect(() => {
    // Використовуємо useEffect для виклику функції після рендерингу компоненту.
    // Тут ми викликаємо функцію fetchCardsList() для отримання списку карток з сервера.
    dispatch(fetchCardsList())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Передаємо пустий масив залежностей, щоб запустити цей ефект лише раз після першого рендеру.

  // Обробник для додавання карток до кошика за їхнім артикулом.
  // const addCardsToCartHandler = (id) => {
  //   dispatch(addToCart(id))
  // }
  const addCardsToCartHandler = (id) => {
    const currentId = { currentId: id } // Створюємо об'єкт з currentId
    dispatch(addToCart(currentId)) // Передаємо об'єкт в екшен addToCart
  }

  // Обробник для зміни статусу "улюблено" для карток за їхнім артикулом.
  const changeFavouriteHandler = (id) => {
    if (cardsInFavorites.includes(id)) {
      // Якщо картка вже у списку улюблених, видаляємо її зі списку.
      dispatch(removeFavourites(id))
    } else {
      // Якщо картки немає в списку улюблених, додаємо її туди.
      dispatch(addToFavourites(id))
    }
  }

  let content
  if (isLoading) {
    // Якщо дані ще завантажуються, показуємо компонент Loader.
    content = <Loader />
  } else if (hasError) {
    // Якщо сталася помилка під час завантаження, відображаємо повідомлення про помилку.
    content = <div>Sorry, error</div>
  } else {
    // Якщо дані завантажені і помилок немає, відображаємо список карток за допомогою компонента CardsList.
    content = (
      <CardsList
        cards={cardsList}
        onClickHandler={addCardsToCartHandler}
        changeFavouriteHandler={changeFavouriteHandler}
        favouritesCardsArr={cardsInFavorites}
      />
    )
  }

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.appInner}>
          {/* {console.log('cardsList:', cardsList)} */}
          {content}
        </div>
      </div>
    </div>
  )
}

export default Catalog

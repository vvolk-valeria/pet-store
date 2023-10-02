// // Цей код визначає компонент форми замовлення корзини. Він використовує бібліотеку Formik для управління формою та валідацією даних. Коли користувач відправляє форму, вона перевіряється за допомогою схеми валідації BasicFormSchema, і якщо дані введені правильно, вони зберігаються та виводяться в модальному вікні підтвердження замовлення.

// import React, { useState } from 'react';
// import { Formik, Form, FieldArray } from 'formik'; // Імпорт компонентів Formik для роботи з формами
// import styles from './CartForm.module.scss';
// import btnStyles from '../Button/Button.module.scss';
// import { BasicFormSchema } from './BasicFormSchema'; // Імпорт схеми валідації форми
// import { formDataFields } from './formDataFields'; // Імпорт полів форми
// import { FormikInputBlock } from './formFields/FormikInputBlock'; // Імпорт компонента для текстових полів форми
// import { NumberFormatInputBlock } from './formFields/NumberFormatInputBlock'; // Імпорт компонента для введення номера телефону
// import { useDispatch } from 'react-redux'; // Імпорт useDispatch для взаємодії з Redux Store
// // import { ModalRoot } from '../../components/Modal/ModalRoot'; // Імпорт компоненту модального вікна
// // import { SHOW_CHECKOUT_MODAL } from '../../store/modal/types'; // Імпорт типу для відображення модального вікна
// // import { setCheckoutModalShow, setModalClose } from '../../store/modal/actions'; // Імпорт дій для роботи з модальним вікном
// import { checkoutOrder } from '../../store/cart/actions'; // Імпорт дій для оформлення замовлення
// // import { removeDiscount } from '../../store/cart/actions'; // Імпорт дій для видалення знижки
// // import PropTypes from 'prop-types';

// export const CartForm = (cards) => {
//     const dispatch = useDispatch();
//     const [values, setvalues] = useState(null);

//     const handleFormSubmit = (values) => {
//         setvalues(values); // Зберігаємо значення форми
//         dispatch(setCheckoutModalShow(SHOW_CHECKOUT_MODAL)) // Відображаємо модальне вікно з підтвердженням замовлення
//     }
//     // const closeModalHandler = () => {
//     //     dispatch(setModalClose(SHOW_CHECKOUT_MODAL)); // Закриваємо модальне вікно
//     //     dispatch(checkoutOrder()); // Виконуємо оформлення замовлення
//     //     dispatch(removeDiscount()); // Видаляємо знижку
//     // }
//     return (
//         <>
//             <div className={styles.formContainer}>
//                 <h1 className={styles.cartTitle}>2. Shipping info</h1>

//                 <Formik
//                     initialValues={{
//                         firstName: '',
//                         lastName: '',
//                         email: '',
//                         age: '',
//                         phone: '',
//                         address: ''
//                     }}
//                     validationSchema={BasicFormSchema} // Встановлюємо схему валідації для форми
//                     onSubmit={handleFormSubmit}>

//                     {({ isSubmitting }) => (
//                         <Form className={styles.form}>
//                             <FieldArray name="fields"
//                                 render={() => (<>
//                                     <div className={styles.formInner}>
//                                         {formDataFields.map(({ id, name, label, placeholder, type }) => {
//                                             return name === 'phone' ?
//                                                 <NumberFormatInputBlock key={id} name={name} type={type} label={label} /> :
//                                                 <FormikInputBlock key={id} name={name} type={type} label={label} placeholder={placeholder} />
//                                         })}
//                                     </div>
//                                     <button className={`${btnStyles.btn} ${styles.submitBtn}`} disabled={isSubmitting} type="submit">Checkout</button>
//                                 </>)}
//                             />
//                         </Form>
//                     )}
//                 </Formik>
//             </div>
//             {/* <ModalRoot modalType={SHOW_CHECKOUT_MODAL}
//                 modalProps={{
//                     closeModalHandler: () => { closeModalHandler() },
//                     header: 'Your order has been received',
//                     closeButton: true,
//                     cards: { cards },
//                     formValues: values ? values : null
//                 }} /> */}
//         </>
//     )
// };

// CartForm.propTypes = {
//     cards: PropTypes.array
// };
// CartForm.defaultProps = {
//     cards: []
// }

import React, { useState } from 'react'
import { Formik, Form, FieldArray } from 'formik'
import styles from './CartForm.module.scss'
import btnStyles from '../Button/Button.module.scss'
import { BasicFormSchema } from './BasicFormSchema'
import { formDataFields } from './formDataFields'
import { FormikInputBlock } from './formFields/FormikInputBlock'
import { NumberFormatInputBlock } from './formFields/NumberFormatInputBlock'
import { useDispatch } from 'react-redux'
import { checkoutOrder } from '../../store/cart/actions'
import PropTypes from 'prop-types'

export const CartForm = () => {
  const dispatch = useDispatch()
  const [values, setvalues] = useState(null)

  const handleFormSubmit = (values) => {
    setvalues(values)
    dispatch(checkoutOrder())
  }

  return (
    <>
      <div className={styles.formContainer}>
        <h1 className={styles.cartTitle}>2. Shipping info</h1>

        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            phone: '',
            address: '',
          }}
          validationSchema={BasicFormSchema}
          onSubmit={handleFormSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form}>
              <FieldArray
                name="fields"
                render={() => (
                  <>
                    <div className={styles.formInner}>
                      {formDataFields.map(
                        ({ id, name, label, placeholder, type }) => {
                          return name === 'phone' ? (
                            <NumberFormatInputBlock
                              key={id}
                              name={name}
                              type={type}
                              label={label}
                            />
                          ) : (
                            <FormikInputBlock
                              key={id}
                              name={name}
                              type={type}
                              label={label}
                              placeholder={placeholder}
                            />
                          )
                        }
                      )}
                    </div>
                    <button
                      className={`${btnStyles.btn} ${styles.submitBtn}`}
                      disabled={isSubmitting}
                      type="submit"
                    >
                      Checkout
                    </button>
                  </>
                )}
              />
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

CartForm.propTypes = {
  cards: PropTypes.array,
}

CartForm.defaultProps = {
  cards: [],
}

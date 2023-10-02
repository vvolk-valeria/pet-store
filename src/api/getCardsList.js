// Ця функція отримує список карток з сервера
export const getCardsList = async () => {
  // Відправляємо запит на сервер для отримання списку карток
  const response = await fetch('./cardListMy.json')

  // Перевіряємо, чи запит був успішним (статус 200 OK)
  if (!response.ok) {
    throw new Error('Помилка - ' + response.status) // Якщо статус не 200 OK, викидаємо помилку з відповідним повідомленням
  }

  // Повертаємо дані у форматі JSON
  return response.json()
}

// import axios from 'axios'

// export const getCardsList = () => {
//   return new Promise((resolve, reject) => {
//     axios
//       .get('./cardList.json')
//       .then((response) => {
//         const cards = response.data
//         resolve(cards) // Викликаємо resolve() з отриманими даними
//       })
//       .catch((error) => {
//         console.error('Помилка отримання списку карток', error)
//         reject(error) // Викликаємо reject() у разі помилки
//       })
//   })
// }

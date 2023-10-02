import { render } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import Button from './Button'; // Імпорт компонента <Button />

describe('<Button /> component', () => {
    it('should render button with text', () => {
        // Рендеримо компонент <Button /> з текстом "Ok" та отримуємо результат
        const { getByText } = render(<Button text="Ok" />)
        
        // Перевіряємо, чи текст "Ok" відображається на кнопці
        getByText('Ok')
    })
    
    it('should calls "onClickHandler" prop on button click', () => {
        // Створюємо функцію-заглушку (mock function) для обробника подій
        const onClickHandler = jest.fn();
        
        // Рендеримо компонент <Button /> з текстом "OK" та передаємо обробник подій
        const { getByText } = render(<Button text="OK" onClickHandler={onClickHandler} />);
        
        // Спричиняємо клік на кнопці з текстом "OK"
        fireEvent.click(getByText("OK"));
        
        // Перевіряємо, чи була викликана функція-заглушка onClickHandler
        expect(onClickHandler).toHaveBeenCalled();
    });
})

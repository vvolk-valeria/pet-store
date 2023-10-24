import  Loader from '../../components/Loader/Loader';
import { Suspense, useState } from 'react';
import css from './AdminPage.module.scss';
import { NavLink, Outlet } from 'react-router-dom';
import Logo from '../../icons/logo';
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai'
import { IoIosArrowUp } from 'react-icons/io';


const AdminPage = () => {
    const [activeItem, setActiveItem] = useState('orders');
    const navItems = [
        { href: 'orders', text: 'Orders'},
        { href: 'content', text: 'Content'},
        { href: 'users', text: 'Users'},
        { href: 'admin/account', text: 'My profile'},
    ];
    
    return (
        <div className={css.container}>
            <div>
                <div>
                    <NavLink to="/" className={css.logo}>
                        <Logo />
                    </NavLink>
                </div>
                <ul className={css.list}>
                    {navItems.map(({ href, text }) => (
                        <li
                            className={href === activeItem ? `${css.item} ${css.activeItem}` : css.item}
                            key={href}
                            onClick={() => setActiveItem(href)}
                        >
                            <NavLink to={href} className={css.link}>
                                <p>{text}</p>
                                <span className={activeItem === href ? css.rotatedIcon : null}>
                                    <AiOutlineRight />
                                </span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className={css.fontOutlet}>
                <Suspense fallback={<Loader/>}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    )
}

export default AdminPage;
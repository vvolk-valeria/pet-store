import  Loader from '../../components/Loader/Loader';
import { Suspense } from 'react';
import css from './AdminPage.module.scss';
import { NavLink, Outlet } from 'react-router-dom';

const AdminPage = () => {

    const navItems = [
        { href: 'orders', text: 'Orders'},
        { href: 'content', text: 'Content' },
        { href: 'users', text: 'Users' },
        { href: 'admin/account', text: 'My profile' },
    ];
    
    return (
        <div className={css.container}>
            <div className={css.col1}>
                <ul className={css.list}>
                    {navItems.map(({ href,text })=>(
                        <li className={css.item} key={href}>
                            <NavLink to={href} className={css.link}> {text }</NavLink>
                        </li>))
                    }
                </ul>
            </div>
            
            <div className={css.col2}>
                <Suspense fallback={<Loader/>}>
                    <Outlet />
                    <ul>
                        <li>Element 1</li>
                        <li>Element 2</li>
                        <li>Element 3</li>
                    </ul>
                </Suspense>
                
            </div>
        </div>
    )
}

export default AdminPage;
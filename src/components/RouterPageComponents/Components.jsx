import { NavLink, Outlet, useLocation } from 'react-router';
import styles from './RouterPage.module.sass';

function Components () {
  const location = useLocation();
  const page = location.pathname.split('/').pop();

  const pageTitles = {
    loginForm: 'Login Form',
    calendar: 'Counter',
  };

  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar}>
        <NavLink to='loginForm' className={styles.navLink}>
          Login Form
        </NavLink>
        <NavLink to='counter' className={styles.navLink}>
          Counter
        </NavLink>
      </aside>

      <section className={styles.content}>
        {page !== 'components' && (
          <h2 className={styles.title}>{pageTitles[page]}</h2>
        )}
        <div>
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default Components;

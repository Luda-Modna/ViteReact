import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import styles from './RouterPage.module.sass';

function NotFound () {
  const navigate = useNavigate();

  useEffect(() => {
    const id = setTimeout(() => navigate('/'), 3000);
    return () => {
      clearTimeout(id);
    };
  });

  return (
    <div className={styles.notFoundContainer}>
      <h2>404 Not Found</h2>
    </div>
  );
}

export default NotFound;

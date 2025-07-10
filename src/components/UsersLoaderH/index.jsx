import React, { useState } from 'react';
import getUsers from '../../api';
import styles from './../UserLoader/UserLoader.module.sass';
import classNames from 'classnames';
import { useData } from '../../hooks';

function UsersLoaderH () {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const {
    data: users,
    isFetching,
    error,
  } = useData(getUsers, itemsPerPage, currentPage);

  const nextPage = () => {
    setCurrentPage(currentPage => currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage => currentPage - 1);
    }
  };

  const handleResultsChange = ({ target: { value } }) => {
    setItemsPerPage(parseInt(value));
    setCurrentPage(1);
  };

  return (
    <>
      {error && <div>ERROR</div>}
      {isFetching && <div>LOADING... </div>}
      {!error && !isFetching && (
        <>
          <div className={styles.controls}>
            <label>
              <span>Enter the number of users: </span>
              <select value={itemsPerPage} onChange={handleResultsChange}>
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
              </select>
            </label>
            <div className={styles.btnGroup}>
              <button onClick={prevPage}>{'<'}</button>
              <button onClick={nextPage}>{'>'}</button>
            </div>
          </div>

          <ul className={styles.userList}>
            {users.map(u => (
              <li key={u.login.uuid} className={styles.userCard}>
                <div className={styles.userPhoto}>
                  <img
                    src={u.picture.medium}
                    alt={`${u.name.first} ${u.name.last}`}
                    className={classNames(styles.photoImg, {
                      [styles.male]: u.gender === 'male',
                      [styles.female]: u.gender === 'female',
                    })}
                  />
                  {u.nat && (
                    <img
                      className={styles.flagImg}
                      src={`https://flagcdn.com/w20/${u.nat.toLowerCase()}.png`}
                      alt={u.nat}
                      title={u.nat}
                    />
                  )}
                </div>
                <div className={styles.userInfo}>
                  <h2 className={styles.userName}>
                    {u.name.title} {u.name.first} {u.name.last}
                  </h2>
                  <p>Email: {u.email}</p>
                  {u.phone && <div>Phone: {u.phone}</div>}
                  {u.location && (
                    <div>
                      Location: {u.location.city}, {u.location.country}
                    </div>
                  )}
                  <div>Gender: {u.gender}</div>
                  <div>Nationality: {u.nat}</div>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default UsersLoaderH;

import React, { Component } from "react";
import getUsers from "../../api";
import styles from "./UserLoader.module.sass";
import classNames from "classnames";

export default class UserLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isFetching: false,
      error: null,
      currentPage: 1,
      itemsPerPage: 5,
    };
  }

  loadUsers = () => {
    const { currentPage, itemsPerPage } = this.state;
    this.setState({ isFetching: true });

    getUsers({
      page: currentPage,
      results: itemsPerPage,
    })
      .then((data) => this.setState({ users: data.results }))
      .catch((e) => this.setState({ error: e }))
      .finally(() => this.setState({ isFetching: false }));
  };

  componentDidMount() {
    this.loadUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;
    if (currentPage !== prevState.currentPage) {
      this.loadUsers();
    }
  }

  nextPage = () => {
    const { currentPage } = this.state;
    this.setState({
      currentPage: currentPage + 1,
    });
  };

  prevPage = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState({ currentPage: currentPage - 1 });
    }
  };

  handleResultsChange = ({ target: { value } }) => {
    this.setState(
      { itemsPerPage: parseInt(value), currentPage: 1 },
      this.loadUsers
    );
  };

  render() {
    const { users, isFetching, error, itemsPerPage } = this.state;

    return (
      <>
        {error && <div>ERROR</div>}
        {isFetching && <div>LOADING... </div>}
        {!error && !isFetching && (
          <>
            <div className={styles.controls}>
              <label>
                <span>Enter the number of users: </span>
                <select
                  value={itemsPerPage}
                  onChange={this.handleResultsChange}
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </select>
              </label>
              <div className={styles.btnGroup}>
                <button onClick={this.prevPage}>{"<"}</button>
                <button onClick={this.nextPage}>{">"}</button>
              </div>
            </div>

            <ul className={styles.userList}>
              {users.map((u) => (
                <li key={u.login.uuid} className={styles.userCard}>
                  <div className={styles.userPhoto}>
                    <img
                      src={u.picture.medium}
                      alt={`${u.name.first} ${u.name.last}`}
                      className={classNames(styles.photoImg, {
                        [styles.male]: u.gender === "male",
                        [styles.female]: u.gender === "female",
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
}

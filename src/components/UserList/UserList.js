import React from "react";
import styles from "./UserList.module.css";
const UserList = (props) => {
  return (
    <div className={styles.users}>
      <ul>
        {props.users.map((user, index) => {
          return (
            <li key={index}>
              {user.username}-{`(${user.age})`}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default UserList;

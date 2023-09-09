import React from "react";
import styles from "./UserList.module.css";
import Card from "../Card/Card";
const UserList = (props) => {
  return (
    <Card classes={styles.users}>
      <ul>
        {props.users.map((user, index) => {
          return (
            <li key={index}>
              {user.username}-{`(${user.age})`}
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
export default UserList;

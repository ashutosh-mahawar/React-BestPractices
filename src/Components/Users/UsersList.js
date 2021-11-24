import React from "react";

import Card from "../UI/Card";
import classes from "./UsersList.module.css";
import Proptypes from 'prop-types';



const UsersList = (props) => {
    return (
    <Card className={classes.users}>
        <ul>
        {props.users.map((user) => (
            <li key={user.id}>
                {user.name} ({user.age} years old))
            </li>
            ))}
        </ul>
    </Card>
    );
};

UsersList.propTypes = {
    users: Proptypes.arrayOf(
        Proptypes.shape({
            name: Proptypes.string,
            age: Proptypes.string
        })
    )
}


export default UsersList;

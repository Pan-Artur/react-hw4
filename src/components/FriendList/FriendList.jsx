import PropTypes from "prop-types";

import "./FriendList.css";

export const FriendList = ({ friends }) => {
    return (
        <ul className="friendList">
            {friends.map(({ id, isOnline, avatar, name }) => (
                <li className="friendItem" key={id}>
                <span className={isOnline ? "statusActive" : "status"}></span>
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
              </li>
            ))}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};
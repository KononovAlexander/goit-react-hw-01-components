import FriendListItem from '../friend_list_item/FriendListItem';
import css from './FriendList.module.css';  

export default function FriendList({friends}) {
    return (
        <ul className={css.friend_list}>
            {friends.map(({ avatar, name, isOnline, id }) =>
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline } />)}
        </ul>
    )
}
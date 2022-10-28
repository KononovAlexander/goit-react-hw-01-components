import css from '../friend_list/FriendList.module.css';  

export default function FriendListItem({ avatar, name, isOnline, id }) {
    return (
    <li key={id} className={css.item}>
            <span  className={isOnline ? css.online : css.offline }>{isOnline ? 'Online': 'Offline' }</span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
    </li>
    )
}
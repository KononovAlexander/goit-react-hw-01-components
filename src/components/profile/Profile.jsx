import css from './Profile.module.css';
export default function Profile({ username, tag, location, avatar, stats }) {
    return (
    <div className={css.profile}>
        <div className={css.description}>
          <img
            className={css.avatar}
            src={avatar}
            alt={username}
          />
          <p className={css.name}>{username }</p>
          <p className={css.tag}>{ tag}</p>
          <p className={css.location}>{location }</p>
        </div>

        <ul className={css.stats}>
          <li className={css.statsItem}>
            <span className={css.label}>Followers: </span>
            <span className={css.statsValue}>{stats.followers }</span>
          </li>
          <li className={css.statsItem}>
            <span className={css.label}>Views: </span>
            <span className={css.statsValue}>{stats.views }</span>
          </li>
          <li className={css.statsItem}>
            <span className={css.label}>Likes: </span>
            <span className={css.statsValue}>{stats.likes }</span>
          </li>
        </ul>
    </div >)
}


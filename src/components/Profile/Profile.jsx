import s from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <img className={s.image} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.list}>
        <li className={s.listItem}>
          <span className={s.itemTitle}>Followers</span>
          <span className={s.itemValue}>{followers}</span>
        </li>
        <li className={s.listItem}>
          <span className={s.itemTitle}>Views</span>
          <span className={s.itemValue}>{views}</span>
        </li>
        <li className={s.listItem}>
          <span className={s.itemTitle}>Likes</span>
          <span className={s.itemValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

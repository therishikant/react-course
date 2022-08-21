import classes from './MeetupItem.module.css'

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <div>
        <img src={props.image} alt={props.title}></img>
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div >
      <div className={classes.actions}>To Favorites</div>
    </li>
  );
}

export default MeetupItem;

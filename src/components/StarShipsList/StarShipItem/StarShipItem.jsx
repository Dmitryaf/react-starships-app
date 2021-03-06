import React, { useContext } from 'react';
import styles from './StarShipItem.module.scss';
import store from '../../../store';

const StarShipItem = (props) => {
  const { addStarShip } = useContext(store);

  return (
    <div className={styles.item} onClick={() => addStarShip(props.id)}>
      <h3 className={styles.item__title}>{props.name}</h3>
      <div className={styles.item__row}>
        <span className={styles.item__rowName}>Passengers: </span>
        {props.passengers}
      </div>
      <div className={styles.item__row}>
        <span className={styles.item__rowName}>Cost: </span>
        {props.cost}
      </div>
      <div className={styles.item__row}>
        <span className={styles.item__rowName}>Length: </span>
        {props.length}
      </div>
      <div className={styles.item__row}>
        <span className={styles.item__rowName}>Max speed: </span>
        {props.maxSpeed}
      </div>
    </div>
  );
};

export default StarShipItem;

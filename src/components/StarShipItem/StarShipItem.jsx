import React from 'react';
import styles from './StarShipItem.module.scss';

const StarShipItem = (props) => {
  return (
    <div className={styles.item}>
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

import React from 'react';
import styles from './CompareResultField.module.scss';

const CompareResultField = (props) => {
  const firstItem = props.firstItem.props;
  const secondItem = props.secondItem.props;

  function compareFunction(param1, param2) {
    const removeSymbolsParam1 = param1.replace(/[^\d.n/a]/g, '');
    const removeSymbolsParam2 = param2.replace(/[^\d.n/a]/g, '');

    const paramNumber1 = Number(removeSymbolsParam1);
    const paramNumber2 = Number(removeSymbolsParam2);

    switch (true) {
      case isNaN(paramNumber1) || isNaN(paramNumber2):
        return <span className="red-text">&nbsp;Нельзя сравнить</span>;

      case paramNumber1 > paramNumber2:
        return (
          <div>
            <span className="green-text">&nbsp;{paramNumber1}</span> {'>'}{' '}
            <span className="red-text">&nbsp;{paramNumber2}</span>
            <span className="difference">
              Разница: {Math.ceil(paramNumber1 - paramNumber2)}
            </span>
          </div>
        );

      case paramNumber1 < paramNumber2:
        return (
          <div>
            <span className="red-text">&nbsp;{paramNumber1}</span> {'<'}{' '}
            <span className="green-text">&nbsp;{paramNumber2}</span>
            <span className="difference">
              Разница: {Math.ceil(paramNumber2 - paramNumber1)}
            </span>
          </div>
        );

      case paramNumber1 === paramNumber2:
        return <span>&nbsp;Значения равны</span>;
    }
  }

  return (
    <div className={styles.compareResult}>
      <h2 className={styles.compareResult__title}>Результат:</h2>

      <div className={styles.compareResult__row}>
        <span className={styles.compareResult__rowName}>Passengers: </span>
        {compareFunction(firstItem.passengers, secondItem.passengers)}
      </div>

      <div className={styles.compareResult__row}>
        <span className={styles.compareResult__rowName}>Cost: </span>
        {compareFunction(firstItem.cost, secondItem.cost)}
      </div>

      <div className={styles.compareResult__row}>
        <span className={styles.compareResult__rowName}>Length: </span>
        {compareFunction(firstItem.length, secondItem.length)}
      </div>

      <div className={styles.compareResult__row}>
        <span className={styles.compareResult__rowName}>Max speed: </span>
        {compareFunction(firstItem.maxSpeed, secondItem.maxSpeed)}
      </div>
    </div>
  );
};

export default CompareResultField;

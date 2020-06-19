import React from 'react';
import Hero from '../Hero/Hero';
import styles from './List.scss';

class List extends React.Component {
  render() {
    return (
        <section className={styles.title}>
            <Hero/>
        </section>
    )
  }
}

export default List;
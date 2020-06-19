import React from 'react';
import Hero from '../Hero/Hero';
import styles from './List.scss';

class List extends React.Component {
  render() {
    return (
        <section className={styles.title}>
            <Hero titleText={this.props.title} />
            <div className={styles.description}>
                {this.props.children}
            </div>
        </section>
    )
  }
}

export default List;
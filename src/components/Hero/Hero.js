import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

class Hero extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <h2 className={styles.title}>{this.props.title}</h2>
        <img className={styles.image}>{this.props.imaheH}</img>
    </header>
    )
  }
}

Hero.propTypes = {
    title: PropTypes.node.isRequired,
  };

export default Hero;
import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

class Hero extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <h2 className={styles.title}>{this.props.title}</h2>
        <img src={this.props.image} className={styles.image}/>
    </header>
    )
  }
}

// Hero.propTypes = {
//     title: PropTypes.node.isRequired,
//   };

export default Hero;
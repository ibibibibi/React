import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = (props) => {


// class Hero extends React.Component {
//     static propTypes = {
//         title: PropTypes.node.isRequired,
//         image: PropTypes.node,
//     }

//   render() {
    return (
      <header className={styles.component}>
        <h2 className={styles.title}>{ReactHtmlParser(props.title)}</h2>
        <img src={props.image} className={styles.image}/>
    </header>
    )
  }

  Hero.propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.node,  
  }

export default Hero;
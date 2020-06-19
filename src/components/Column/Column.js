import React from 'react';
import Hero from '../Hero/Hero';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component{
    render() {
        return(
            <div className={styles.component}>
                <h3 className={styles.title}>{this.props.title}</h3>
            </div>
        )
    }
}

export default Column;
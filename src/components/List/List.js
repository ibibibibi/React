import React from 'react';
import Hero from '../Hero/Hero';
import styles from './List.scss';
import columnStyles from '../Column/Column.scss';
import PropTypes from 'prop-types';
import Column from '../Column/Column';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node,
    }

    static defaultProps = {
        children: <p>I can do all the things!!!</p>,
    }

    render() {
        return (
            <section className={styles.component}>
                <Hero className={styles.title} title={this.props.title} image={this.props.image}/>
                <div className={styles.description}>
                    {this.props.children}
                </div>
            
                <div className={styles.columns}>
                    <Column firstColumn={this.props.column1}/>
                    <Column secondColumn={this.props.column2}/>
                    <Column thirdColumn={this.props.column3}/>
                </div>
            </section>
        )
    }
}

export default List;
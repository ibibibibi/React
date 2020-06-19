import React from 'react';
import Hero from '../Hero/Hero';
import styles from './List.scss';
import PropTypes from 'prop-types';

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
            <section className={styles.title}>
                <Hero title={this.props.title} image={this.props.image}/>
                <div className={styles.description}>
                    {this.props.children}
                </div>
            </section>
        )
    }
}

export default List;
import React from 'react';
import Hero from '../Hero/Hero';
import styles from './List.scss';
import PropTypes from 'prop-types';
import Column from '../Column/Column';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator';

class List extends React.Component {
    state = {
        columns: this.props.columns || [],
        cards: this.props.cards || [],
      }
      
      static propTypes = {
        title: PropTypes.node.isRequired,
        description: PropTypes.node,
        columns: PropTypes.array,
        cards: PropTypes.array,
    }

    static defaultProps = {
        description: settings.defaultListDescription,
    }

    addColumn(title){
        this.setState(state => (
          {
            columns: [
              ...state.columns,
              {
                key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
                title,
                icon: 'list-alt',
                cards: []
              }
            ]
          }
        ));
    }

    render() {
        console.log(this.props);
        return (
            <section className={styles.component}>
                <Hero className={styles.title} title={this.props.title} image={this.props.image}/>
                <div className={styles.description}>
                    {this.props.description}
                </div>
            
                <div className={styles.columns}>
                    {this.state.columns.map(({key, ...columnProps}) => (
                        <Column key={key} {...columnProps} />
                    ))}
                </div>

                <div className={styles.creator}>
                    <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
                </div>
            </section>
        )
    }
}

export default List;
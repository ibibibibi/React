import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';

class Column extends React.Component{
    state = {
        cards: this.props.cards || []
    }
    
    static propTypes = {
        title: PropTypes.string.isRequired,
    }

    addCard(title){
        this.setState(state => ({
            cards:[...state.cards,
                {
                key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
                title,
                },
            ],
        }));
    }

    render() {
        const {title, icon, addCard} = this.props;

        const {cards} = this.state;

        return(
            <div className={styles.component}>
                <h3 className={styles.title}>{title}
                    <span className={styles.icon}><Icon name={icon}/></span>
                </h3>
                <div className={styles.cards}>
                    {cards.map(cardData => (
                    <Card key={cardData.id} {...cardData} />
                    ))}
                </div>
                <div className={styles.creator}>
                    <Creator text={settings.cardCreatorText} action={(title) => this.addCard(title)}
                    />
                </div>
            </div>
        )
    }
}

export default Column;
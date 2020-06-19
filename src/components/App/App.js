import React from 'react';
import styles from './App.scss';
import List from '../List/List';
import Footer from '../Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <div>
          <h1 className={styles.title}>My first React app</h1>
          <h2 className={styles.subtitle}>Let's go</h2>
        </div>
        <List
          title={['Things to do', <sup key='1'>soon!</sup>]}
          image={'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'}>
        </List>
      </main>
    )
  }
}

export default App;

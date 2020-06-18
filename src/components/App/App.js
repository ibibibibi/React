import React from 'react';
import css from './App.scss';
import Footer from '../Footer/Footer';
import List from '../List/List';

class App extends React.Component {
  render() {
    return (
      <main className={css.title}>
        <h1>hello</h1>
        <List />
        <Footer/>
      </main>
    )
  }
}

export default App;

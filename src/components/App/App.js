import React from 'react';
import css from './App.scss';
import Footer from '../Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <main className={css.title}>
        <h1>hello</h1>
        <Footer/>
      </main>
    )
  }
}

export default App;

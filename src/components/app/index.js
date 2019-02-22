import React from 'react';

import Header from '../header';
import ListArticles from '../article/list';

import styles from './App.module.scss';

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <Header />
        <main>
          <ListArticles />
        </main>
        <footer>
          footer
        </footer>
      </div>
    );
  }
}

export default App;

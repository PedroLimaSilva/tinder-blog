import React from 'react';
import styles from './List.module.scss';

import Item from '../item';

// import { ArticlesCollection } from '../../../firebase';
import Articles from '../../../mocks/articles.json';

export default class ListArticles extends React.Component {
  state = {
    articles: [],
  }

  componentWillMount(){
    const articles = Articles;

    // ArticlesCollection.orderBy("dateCreated", "desc").get().then(querySnapshot => {
    //   querySnapshot.forEach(doc => {
    //     console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    //     articles.push({ id: doc.id, ...doc.data() });
    //   });
    //   this.setState({articles});
    // });
    this.setState({articles})
  }

  render() {
    const { articles } = this.state;
    return (
      <div className={styles.list}>
        {
          articles.map((article, index) =>
            <Item key={article._id} article={article} height={(index)%3+1} />
          )
        }
      </div>
    );
  }
}


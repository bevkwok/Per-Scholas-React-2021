//https://www.freecodecamp.org/news/how-to-use-redux-in-your-react-typescript-app/
import * as React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { Article } from './components/Article'
import { AddArticle } from './components/AddArticle'
import { addArticle, removeArticle } from './store/actionCreators'
import { Dispatch } from 'redux'
import { stat } from 'fs';

const App: React.FC = () => {
  // useSelector hook enables access to the store
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
    // allow shallow equality when checking for changes
  )

  // useDispatch help dispatch an action for adding articles
  const dispatch: Dispatch<any> = useDispatch()

  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  )

  return (
    <main>
      <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => (
        <Article 
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))}
    </main>
  )
}

export default App;

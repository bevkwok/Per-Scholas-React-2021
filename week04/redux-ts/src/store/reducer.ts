// Reducer =  pure function that takes state of store and action
// then return new state

import * as actionTypes from './actionTypes'

// initial state
const initialState: ArticleState = {
    articles: [
        {
            id: 1,
            title: "post 1",
            body:
                "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
        },
        {
            id: 2,
            title: "post 2",
            body:
                "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
        },
    ]
}

// the reducer (initialState, action)
const reducer = (
    state: ArticleState = initialState,
    action: ArticleAction
): ArticleState => {
    switch(action.type) {
        case actionTypes.ADD_ARTICLE:
            const newArticle: IArticle = {
                id: Math.random(),
                title: action.article.title,
                body: action.article.body,
            }
            return {
                ...state,
                articles: state.articles.concat(newArticle)
            }
        case actionTypes.REMOVE_ARTICLE:
            const updatedArticle: IArticle[] = state.articles.filter(article => article.id !== action.article.id)
            return {
                ...state,
                articles: updatedArticle,
            }
    }
    return state
}

export default reducer
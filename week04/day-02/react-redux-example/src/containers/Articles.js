import React, { useState } from "react"

// connect compoenet to store
import { connect } from 'react-redux'

import Article from "../components/Article/Article"
import AddArticle from "../components/AddArticle/AddArticle"
import * as actionTypes from "../store/actionTypes"

const Articles = ({ articles, saveArticle }) => {
    // const [articles, setArticles] = useState([
    //     { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
    //     { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
    // ])

    // // this goes to mapDispatchToProps
    // const saveArticle = e => {
    //     e.preventDefault()
    //     // the logic will be updated later
    // }

    return (
        <div>
            <AddArticle saveArticle={saveArticle} />
            {articles.map(article => (
                <Article key={article.id} article={article} />
            ))}
        </div>
    )
}

// used this to get state from redux store
// parameter = state stored in redux
// that returns a JS object that holds articles
const mapStateToProps = state => {
    return {
        articles: state.articles,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveArticle: article => 
        dispatch({ type: actionTypes.ADD_ARTICLE, articleData: { article } }),
    }
}

// connect() = higher order function, take component as input
// it connect component to the store and give access to the state
// pass mapStateToProps() to connect() 
// ^ this take component-Articles => wrapper conponent with the props it injecs.
// so you can get state from store. component get state via props
// this show articles using redux
export default connect(mapStateToProps, mapDispatchToProps)(Articles)
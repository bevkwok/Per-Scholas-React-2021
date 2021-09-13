const initialState = {
    articles: [
        { id: 1, title: "post 1", body: "this is first post"},
        { id: 2, title: "post 2", body: "second post here"}
    ],
}

const reducer = (state = initialState, action) => {
    return state
}

export default reducer
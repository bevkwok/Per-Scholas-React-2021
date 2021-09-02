import React from 'react';
import './App.css';
import axios, { CancelTokenSource } from 'axios';

interface IPost {
  id: number;
  userId?: number;
  title: string;
  body: string;
}

const defaultPosts:IPost[] = [];

const App = () => {

  const cancelToken = axios.CancelToken; //making cancel token

  const [cancelTokenSource, setCancelTokenSource]: [CancelTokenSource, (cancelTokenSource: CancelTokenSource) => void] = React.useState(cancelToken.source());
  
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultPosts);
  
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  // <> is typing the state property variable
  
  const [error, setError]: [string, (error: string) => void] = React.useState("");
  
  // making API call
  React.useEffect(() => {
    // TODO - get posts
    axios
    .get<IPost[]>("https://jsonplaceholder.typicode.com/posts", {
      cancelToken: cancelTokenSource.token,
      headers: {
        "Content-Type": "application/json"
      },
      timeout: 1
    })
    .then(response => {
      setPosts(response.data);
      setLoading(false);
    })
    .catch(ex => {
      const error = 
      ex.code === "ECONNABORTED"
      ? "A timeout has occurred"
      : ex.response.status === 404 
      ? "Resource Not found"
      : "An unexpected error has occurred";
      setError(error);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <ul className="post">
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {error && <p className="error">{error}</p>}
    </div>
  );
  
}

export default App;

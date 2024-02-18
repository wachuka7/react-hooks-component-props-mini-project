import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";

console.log(blogData);


function App() {
  return (
    <div className="App">
      <Header blogName={blogData.name}/>
      <About image={blogData.image} aboutText={blogData.about}/>
      <ArticleList posts={blogData.posts } />
    </div>
  );


}

export default App;

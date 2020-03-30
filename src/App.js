import React from 'react';
import './App.css';
import Post from './components/post';
import './components/post/main.css';
import author from './components/post/images/author.jpg';
import imagePost from './components/post/images/po.png'; 
function App() {
const PHOTHO_AUTHOR = author;
const POST_IMAGE = imagePost;
  return (
    <div className="App">
    <Post
      name = "Bura Tetiana"
      photo = {PHOTHO_AUTHOR}
      nickname =  "@burkatt99"
      content="I found new cool courses from Cursor. I hope that by the end of my studies I will become a real programmer!"
      image={POST_IMAGE}
      date={"26 февр."}
    />
    </div>
  );
}

export default App;

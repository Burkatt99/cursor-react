import React, { UseState, useState } from 'react';
import like from './images/like.png';
import comment from './images/comment.png';
import repost from './images/repost.png';
import save from './images/save.png';


function Post(props){
    const [countLike, setCountLike] = useState(254);
    const [countComment, setCountComment] = useState(73);
    const [countRepost, setCountRepost] = useState(36);
    const [countSave, setCountSave] = useState(18);
return(
    <div class = 'post'>
        <div class="mainInfAutor">
            <div id="photo"><img alt = 'author_photo' src={props.photo}/></div>
            <div class = 'author'>
                <span id="name">{props.name}</span>
				<span id="nickname">☑ {props.nickname} • </span>
				<span id="data">{props.date}</span>
                <br/><span id="msg">{props.content}</span>
            </div>
        </div>
        <div class="imgPost">
        <img src={props.image} alt='post'/>
        </div>
        <div class="icons">
<img id="like" alt ="like" src={like} onClick={()=>setCountLike(countLike + 1)}/><span>{countLike}</span>
<img id="comment" alt='comment' src={comment} onClick={()=>setCountComment(countComment + 1)}/><span>{countComment}</span>
<img id="repost" alt='repost' src={repost} onClick={()=>setCountRepost(countRepost + 1)}/><span>{countRepost}</span>
<img id="save" alt='save' src={save} onClick={()=>setCountSave(countSave + 1)}/><span>{countSave}</span>
        </div>
        <p>Give me your LIKE, please)</p>
    </div>
    
);
};

export default Post;
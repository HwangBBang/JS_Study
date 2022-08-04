import React from  "react";
import Comment from "./Comment";

function CommentList(props){ 
    return (
        <div>
            <Comment name={"황병훈"} comment={"안녕하세요."}/>
            <Comment name={"김수정"} comment={"안녕하세요."}/>
            <Comment name={"양진혁"} comment={"안녕하세요."}/>
            <Comment name={"김득호"} comment={"안녕하세요."}/>
            <Comment name={"이수경"} comment={"안녕하세요."}/>
        </div>
    );
}

export default CommentList;
import {useRef} from "react";
import { usePost } from "../context/postContext";
import Post from "./Post";

export default function Wall(){
    const {posts} = usePost();
    console.log(posts)
    return(
        <div className="wall">
            <Post/>
        </div>
    )
}
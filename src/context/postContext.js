import React, {useState,useEffect,useContext} from "react";
import {db} from "../firebase";

const PostContext = React.createContext();

export function usePost(){
    return useContext(PostContext);
}

export function PostProvider({children}){
    const [posts, setPosts] = useState();

    useEffect(()=>{
        db.collection("posts").onSnapshot(querySnapshot =>{
            const postData = [];
            querySnapshot.forEach(item =>{
                postData.push(item.data());
            })
            setPosts(postData);
        })
    },[])

    const value = {
        posts
    }

    return(
        <PostContext.Provider value={value}>
            {children}
        </PostContext.Provider>
    )
}
import {CURRENT_POST, GET_POSTS, POST_THE_POST} from "./constants";
import {Post} from "../models/models";
import axios from "axios";


export const getPosts = () => {
    return async (dispatch:any )=> {
        const response = await fetch('/api/posts')
            .then(response => response.json())
        dispatch({type: GET_POSTS, payload : response})
    }
}
export const postPosts = (body:any) => {
    return async (dispatch:any )=> {
        const response = await axios.post('/api/posts', body  )

        dispatch({type: CURRENT_POST, payload : response.data})
    }
}
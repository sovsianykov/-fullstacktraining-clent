import {Post} from "../models/models"
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {getPosts} from "../redux/actions";
import {useTypesSelector} from "./useTypesSelector";


export const useFetch =  (
 ) => {
    const  { currentPost }   = useTypesSelector(state => state.postReducer)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(getPosts())
    },[dispatch,currentPost])
}
export const deleteMessage = async (id:string) =>{



   await  fetch(`http://localhost:8000/api/posts/:${id}`, { method: 'DELETE' })
            .then(() => console.log('Delete successful'));



}
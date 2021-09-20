import {
  CURRENT_POST,
  GET_POSTS,
  POST_THE_POST,
  SET_THE_AUTHOR,
} from "./constants";
import { InitialState } from "../models/models";

export  const initialState:InitialState = {
  posts: [],
  currentPost: { id:"",title:'', author: '', content:'', _id: ""},
  postedPosts: [],
  author: "",

};
const postReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case CURRENT_POST:
      return {
        ...state,
        currentPost: action.payload,
      };
    case SET_THE_AUTHOR:
      return {
        ...state,
        author: action.payload,
      };
    case POST_THE_POST:
      return {
        ...state,
        postedPosts: action.payload,
      };
    default:
      return state;
  }
};
export default postReducer;

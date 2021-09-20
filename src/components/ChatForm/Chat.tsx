import React, {FunctionComponent, memo } from 'react';
import ChatForm from "./ChatForm";
import styles from "./Chat.module.scss"
import MessageField from "../MessageField/MessageField";
import {useTypesSelector} from "../../hooks/useTypesSelector";


interface ChatProps {
   author: string;
}


const Chat:FunctionComponent<ChatProps> = ({
    author
}) => {

    const  { posts }   = useTypesSelector(state => state.postReducer)

    console.log(posts)
    return (
        <div className={styles.chat}>
            <MessageField posts={posts} name={author}/>
            <ChatForm author={author} />
        </div>
    );
};

export default memo(Chat);
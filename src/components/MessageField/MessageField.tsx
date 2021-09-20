import React, {FunctionComponent, useEffect, useRef} from 'react';
import {Post} from "../../models/models";
import styles from "./MessageField.module.scss"
import Message from "./Message";

interface MessageFieldProps {
    posts: Post[];
    name: string;
}


const MessageField:FunctionComponent<MessageFieldProps> = ({
    posts, name}) => {
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        // @ts-ignore
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(() => {
        scrollToBottom()
    }, [posts]);
    return (
        <section className={styles.messageField} >
            {posts.map((post:Post,i)=>(<Message
                    author={name === post.author}
                    post={post}
                    key={`${post.id}${i}`}
                />))}
            <div ref={messagesEndRef} />
        </section>
    );
};

export default MessageField;
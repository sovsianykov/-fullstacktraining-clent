import React, {FunctionComponent, useMemo} from 'react';
import styles from "./MessageField.module.scss"
import {Post} from "../../models/models";
import cn from "classnames"
import {deleteMessage} from "../../hooks/useFetch";
interface MessageProps {
    post: Post;
    author: boolean;
}

const Message:FunctionComponent<MessageProps> = ({
    post,author
}) => {

    const classNames = useMemo(() => cn({
         [styles.authorMessage]: author ,
        [styles.guestMessage]: !author ,

    }),[author])



    const onClickHandler = () =>{

        if (post._id != null) {
            deleteMessage(post._id).then(r => console.log(r))
        }

    }


    return (
        <div className={classNames} onClick={onClickHandler}>
            <h6 className={classNames}  >{post.author}</h6>
            <section >{post.content}</section>
        </div>
    );
};

export default Message;
import React, {
    FormEvent,
    FunctionComponent, memo,
    useCallback,
    useState,
} from "react";
import Box from "@material-ui/core/Box";
import { Post } from "../../models/models";
import { Button } from "@material-ui/core";
import styles from "./Chat.module.scss";
import { useFetch } from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { postPosts } from "../../redux/actions";
import { SendOutlined } from "@material-ui/icons";

interface FormProps {
  author: string;
}

const ChatForm: FunctionComponent<FormProps> = ({ author }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState<Post>({
    id: "",
    author: author,
    title: "",
    content: "",
    picture: "",
  });
   useFetch()
  const changePost = useCallback((event: FormEvent<HTMLInputElement>) => {
      setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value });
  },[form]
)
  const onSubmitHandler = useCallback((e) => {
    e.preventDefault();
    dispatch(postPosts(form));
  }, [form]);
  return (
    <Box component="form" className={styles.form}>
      {/*<input*/}
      {/*  className={styles.inputField}*/}
      {/*  onChange={changePost}*/}
      {/*  name="title"*/}
      {/*  placeholder="title"*/}
      {/*  value={form.title}*/}
      {/*/>*/}
      <input
        className={styles.inputField}
        onChange={changePost}
        name="content"
        placeholder="text"
        value={form.content}
      />
      {/*<input*/}
      {/*  className={styles.inputField}*/}
      {/*  onChange={changePost}*/}
      {/*  name="picture"*/}
      {/*  value={form.picture}*/}
      {/*/>*/}
      <Button variant="contained" type="submit" onClick={onSubmitHandler}>
        <SendOutlined/>
      </Button>
    </Box>
  );
};

export default memo(ChatForm);

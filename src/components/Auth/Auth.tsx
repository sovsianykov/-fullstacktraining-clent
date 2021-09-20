import React, {
  FormEvent,
  FunctionComponent,
  useCallback,
  useState,
} from "react";
import { Box } from "@material-ui/core";
import styles from "./Auth.module.scss";

interface AuthProps {
  onClick(name: string): void;
}

const Auth: FunctionComponent<AuthProps> = ({ onClick }) => {
  const [name, setName] = useState<string>("");
  const changeHandler = useCallback((event: FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  }, []);

  const submitHandler = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    onClick(name);
    setName("");
  };
  return (
    <Box className={styles.auth}>
      <form className={styles.form}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="input your name"
          value={name}
          onChange={changeHandler}
        />
        <input type="submit" className={styles.btn} onClick={submitHandler} />
      </form>
    </Box>
  );
};

export default Auth;

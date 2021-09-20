import React, {useState} from 'react';
import Header from "./components/Header";
import Auth from "./components/Auth/Auth";
import Chat from "./components/ChatForm/Chat";


const App = () => {
    const [author, setAuthor ] = useState('')
    const title:string = `${author}`
    const navTitle:string = "Join"
  return (
    <div className="container">
        <Header title={title} navTitle={navTitle}  />
            {!author ? <Auth onClick={(name) => setAuthor(name)}/>:
                <Chat author={author}/>
            }
    </div>
  );
}

export default App;

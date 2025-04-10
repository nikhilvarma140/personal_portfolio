import React ,{useState}from "react";
import ste from "./home.css"
import Header from "./Header.jsx"
import { useSelector,useDispatch } from "react-redux";
import { updateName } from "../state/state.js";
import Card from "./Card.jsx";
import Detail from "./Detail.jsx";
const Home = () => {
    const state = useSelector(state => state.state)
    const dispath  = useDispatch();
    const [show,setState] = useState(false);
    function handleClick(){
        setState(true)
        dispath(updateName({name:"nikhil",age:24}))
    }
    return(
        <div className="container" style={ste}>
            <Header />
            <h1>Hi, I am Nikhil</h1>
            <div className="content">
            <Card />
            <div className="details">
                <Detail type = {"exp"}/>
                <Detail type ={"edu"}/>
                <Detail />
            </div>
            </div>
            
            {/* <button  onClick={handleClick}>click me</button>
            {show && state && (
                <>
                 <h3>{state.name}</h3>
                 <h3>{state.age}</h3>
                </>
               

            )} */}
            

            
        </div>
    )
}

export default Home;
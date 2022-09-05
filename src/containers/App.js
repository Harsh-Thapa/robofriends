import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css'
import ErrorBoundary from '../components/ErrorBoundary'

function App() {

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchField] = useState('')
    const [count, setCount] = useState(0)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(Users => setRobots(Users))
            console.log(count)
    }, [count])

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
        
    }

    const filterRobot = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ? <h1>Loading...</h1>
        :(<div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <button onClick={() => setCount(count+1)}>Click Me!</button>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filterRobot}/>
                </ErrorBoundary>
            </Scroll>
        </div>
    );       
}

export default App;
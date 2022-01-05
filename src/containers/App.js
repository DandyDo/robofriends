import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'; 

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchField] = useState('');

    // Fake online REST API that contains users
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {setRobots(users)});
    }, []);
    
    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }

    // Filter the robots based on their name (always lowercase)
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    // Display 'Loading' if there are too many users, else display the robots
    if (!robots.length) {
        return <h1 className="tc">Loading</h1>;
    } 
    else {
        return (
            <div className="tc">
                <h1 className="f1">
                    <a href="https://github.com/DandyDo/robofriends" className=" dim" style={{color:'inherit', textDecoration: 'inherit'}}>
                        Robofriends
                    </a>
                </h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div> 
        )  
    }
}

export default App;
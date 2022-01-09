import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { requestRobots, setSearchField } from '../actions';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


const App = () => {
    const dispatch = useDispatch();
    const { isPending, robots, error } = useSelector((state) => state.requestRobots);
    const { searchField } = useSelector((state) => state.searchRobots);
    
    const onRequestRobots = () => {
        dispatch(requestRobots());
    }
    
    const onSearchChange = (event) => {
        dispatch(setSearchField(event.target.value));
    }

    // fetch users/robots
    useEffect(() => {
        onRequestRobots();
    }, [])

    // Filter the robots based on their name (always lowercase)
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    // Display 'Loading' if there are too many users or it hasn't recieved all robots,
    // else, display the robots
    if (isPending) {
        return <h1 className="tc">Loading</h1>;
    } 
    else if (!error) {
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
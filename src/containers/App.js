import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
import './App.css'; 

class App extends React.Component {
    constructor() {
        super();
        this.state =  {
            robots: [],
            searchfield: ''
        }
    }
    
    onSearchChange = (event) => {
        this.setState({ searchfield : event.target.value });
    }

    render() {
        const { robots, searchfield } = this.state;
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
                <div className='tc'>
                    <h1 className="f1 dim">Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>   
            );
        }
    }

    // Fake online REST API that contains users
    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({ robots: users })});
    }
}

export default App;
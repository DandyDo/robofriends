import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll.js';
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
        // Filter the robots based on their name (always lowercase)
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        // Display 'Loading' if there are too many users, else display the robots
        if (this.state.robots.length === 0) {
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
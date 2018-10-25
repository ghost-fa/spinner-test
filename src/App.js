import React, { Component } from 'react';
import axios from 'axios';
import Spinner from './components/UI/spinner/spinner';
import Card from './components/card/card';
import './App.css';


class App extends Component {
  state={
    loading:true,
    info:null
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>this.setState({info: res.data , loading:false}))

  }


  render() {
    return (
      <div className="App">
       {this.state.loading ?

        <Spinner />
         :

          this.state.info ? this.state.info.map(user => (
              <Card key={user.id} user={user} />
  
          ))

          : null
       }
      </div>
    );
  }
}

export default App;

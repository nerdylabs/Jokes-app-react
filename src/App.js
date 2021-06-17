import React from 'react';
import axios from 'axios';
import Spinner from './spinner'; 
import JokeText from './components/joke-component';
import Button from './components/button-component'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      joke : '',
      loading : true
    }
  }
  componentDidMount(){
    this.setState({loading:true});
    axios.get('https://v2.jokeapi.dev/joke/Programming?format=txt&type=single')
    .then(res=>this.setState({joke:res.data, loading : false}))
    .catch(err=>console.log(err))
  }

  handleClick = ()=>{
    this.setState({loading : true});
    axios.get('https://v2.jokeapi.dev/joke/Programming?format=txt&type=single')
    .then(res=>this.setState({joke:res.data,loading : false}))
    .catch(err=>console.log(err))
  }

  render(){
    return(
      <div className="container" id="container">
        {
          this.state.loading ?
          <Spinner />
          :
          <JokeText>{this.state.joke}</JokeText>
        }
      <Button handleClick = {this.handleClick} >{this.state.joke}</Button>
  </div>

    )
  }
}
export default App;
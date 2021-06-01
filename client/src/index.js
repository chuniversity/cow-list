import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cows: [],
      name1: '',
      description1: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this)
  }

  componentDidMount() {
    this.updateCows()
  }

  updateCows() {
    axios.get('/api/cows/')
    .then((response)=> {
      console.log(response.data)
      this.setState({
        cows: response.data
      })

    })
    .catch((err) => {
      console.log(err)
    });
  }

  postCows(object) {
    console.log('post cows')
    axios.post('/api/cows/', object)
      .then((data) => {
        console.log('post', data)
        this.updateCows()
      })
      .catch((err) => {
        console.log(err)
      })
  }




  handleNameChange = (event) => this.setState({ name1: event.target.value });
  handleDescChange = (event) => this.setState({ description1: event.target.value });


  handleClick = (event) => {
    event.preventDefault()
    console.log('form submitted')
    var object = {};
    object.name1 = this.state.name1;
    object.description1 = this.state.description1;
    console.log('handleclick objectz', object)
    this.postCows(object)

  }


  render() {
    return (
      <div>
        <h1>Cows List</h1>
        <ul>
        {this.state.cows.map((cow) => (
         <li key={cow.ID}>
          {cow.name1}
          </li>
        ))}
         </ul>
         <h2>Add Cow:</h2>
    <form onSubmit={this.handleClick}>
    <p><label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" value={this.state.name1} onChange={this.handleNameChange}></input></p>
    <p><label htmlFor="description">Description:</label>
    <input type="text" id="description" name="description" value={this.state.description1} onChange={this.handleDescChange}></input></p>
    <input type="submit"></input>

    </form>

      </div>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('app'));
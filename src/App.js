import React, { Component }  from 'react';
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
// import logo from './logo.svg';
// import './App.css';
import {Route} from 'react-router-dom'

 


//Using jsx
// const App =(
//   <div>
//     <h1>Child 1</h1>
//     <h2>Child 2</h2>
//     <p>Para 1 </p>
//       <div>
//           <h1 align="center">Child of child</h1>
//           <h2 align="center">child of child</h2>
//           <p align="center">Nested para </p>
//       </div>
//     <p>End Para</p>
  
//   </div>
// )


// Using  COMPONENTS


// class ContactList extends React.Component{
//   render(){
//     const people = this.props.Contacts

//     // //  const App = React.createElement('div',{className : 'Welcome-message'},"Hello!!!!!!!!!!!!!!");

//     // const App = React.createElement('ol', null, people.map((person) => React.createElement('li', { key: 'people.name' }, person.name)))
//     return (<ol>
//         {people.map((person) => (<li key={person.name}>{person.name}</li>))}
//     </ol>
//     );
//   }
// }

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <h2>Component1</h2>
//         <ContactList Contacts={[{ name: 'Tyler' }, { name: 'King' }, { name: 'Jack' }]}/>
//         <h2>Component2</h2>
//         <ContactList Contacts= {[{name : 'killer'}, {name :'Fred'}, {name: 'Tom'}]} />
//       </div>
//     )
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           HELLO this is react sample.
//         </p>
//       </div>
//     );
//   }
// }

// class App extends Component{
//   render(){
//     return (
//       <div className="App">
//          <header className="App-header">
//            <img src={logo} className="App-logo" alt="logo" />
//            <h1 className="App-title">Welcome to React</h1>
//          </header>
//          <p className="App-intro">
//            HELLO this is react sample.
//          </p>      
//       </div>
//     )
//   }
// }




class App extends Component {
  state = {
      contacts : [
    {
      "id": "karen",
      "name": "Karen Isgrigg",
      "handle": "karen_isgrigg",
      "avatarURL": "http://localhost:5001/karen.jpg"
    },
    {
      "id": "richard",
      "name": "Richard Kalehoff",
      "handle": "richardkalehoff",
      "avatarURL": "http://localhost:5001/richard.jpg"
    },
    {
      "id": "tyler",
      "name": "Tyler  McGinnis",
      "handle": "tylermcginnis",
      "avatarURL": "http://localhost:5001/tyler.jpg"
    }
    ],

    screen :'list'
  }
  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts : currentState.contacts.filter((c) => {
        return c.id !== contact.id ;
      })

    }))
  }
  render(){
    return(
      <div>
        <Route path='/' render ={() => (
          <ListContacts
          contacts = {this.state.contacts}
          onDeleteContact = {this.removeContact}
          onNavigate={() =>{
            this.setState(() => ({
              screen : 'create'
            }))
          }}
          />)}
          />
          <Route path='/Create' component={CreateContact} />

      </div>
    )
  }
}

export default App;

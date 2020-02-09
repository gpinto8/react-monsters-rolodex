import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx';
import './App.css';

//2° creo un classe che extends Component,  invece della funz con un return (con dentro html) che avevo
class App extends Component {
  constructor() { //creo un costruttore con un super()
    super();

    this.state = {
      monsters: [], //array di obj
      searchField: '' //contiene l'input degli user
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') //metto il link
      .then(response => response.json()) //converto da json a js che capisce e modifica  
      .then(users => this.setState({ monsters: users })) //sostituisco monster[] che è vuoto con users

  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }


  render() {

    const { monsters, searchField } = this.state; //destructuring: tiro fuori degli element in array
    //è come fare: const monsters = this.state.monsters, ecc
    const filteredMonsters = monsters.filter(m => //creo una const con dentro un filter che prende una funz
      //m e il nome lo prende e lo mette in lettera lower, inoltre includes fa un controllo per vedere se 
      //esiste o meno
      m.name.toLowerCase().includes(searchField.toLowerCase())
    );


    return (
      <div className="App">

      <h1 className='title'>Monsters Rolodex xd</h1>

        <SearchBox
          placeholder='search monsters...'
          handleChange={this.handleChange}
        />

        {/* e qua invece di mettere this.state.monsters, ci metto in monster già renderizzati */}
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;


//crea array e fai un map
// monsters: [ //array con dentro degli obj, monster : []
// {
//   name: 'Frankestein',
//   id: 'id1'
// },
// {
//   name: 'Dracula',
//   id: 'id2'
// },
// {
//   name: 'Zombie',
//   id: 'id3'
// }
// ]
// this.state.monsters.map(monster => //il map è come il foreach
//   <h1 key={monster.id}> {monster.name} </h1>) //dentro h1 ci metto un id per identificare un singolo elemento



// get users fetch
// componentDidMount(){
//   fetch('https://jsonplaceholder.typicode.com/users') //metto il link
//   .then(response => response.json()) //converto da json a js che capisce e modificax  
//   .then(users => this.setState({ monsters: users })) //sostituisco monster[] che è vuotk c+ quasj
// }


//bottone che cambia
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p> {this.state.string} </p> {/*e qua richiamo il this.ecc che contiene la string che renderizzo*/}
//   <button onClick={() => this.setState({ string: 'prova xd' })}>
//     bitch </button> {/* con il setState io cambio qualsiasi key dentro quel obj*/}
// </header>
import './App.css';
import User from './components/User';
import React, { useState, useEffect } from 'react';

const data = [ 
  {
    name: 'João',
    description: 'gosta de maniçoba',
  },
  {
    name: 'Beatriz',
    description: 'gosta de vatapá',
  },
  {
    name: 'Gabriel',
    description: 'gosta de bobó'
  },
]

const App = () => {
  const [users, setUsers] = useState(data); //se não tiver ninguém no lugar de data vem um array vazio
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/type/5')
  //   .then(result => result.json())
  //   .then(result => setPokemons(result.pokemon))
  // })

  useEffect(() => {
    console.log('description alterado')
  }, [description]);

  useEffect(() => {
    console.log('name alterado')
  }, [name]);

  useEffect(() => {
    console.log('users alterado')
  }, [users]);

  useEffect(() => {
    console.log('algum estado foi alterado')
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers([ ...users, { name, description } ]); 
    //limpar os inputs depois
    //no burgerlicious salvar na API
  }

  return (
    <div className="App">
      {
        users.map((user, index) => {
          return (
          <User 
            key={index}
            name={user.name} 
            description={user.description}
          />
          ) 
        })
      }

      <form>
        <input type='text' value={name} onChange={(event) => {setName(event.target.value)}} />
        <input type='text' value={description} onChange={(event) => {setDescription(event.target.value)}} />
        <button type='submit' value='' onClick={(event) => handleSubmit(event)}> Criar novo usuário </button>
      </form>
    </div>
  );  
}

export default App;

//className para estilizar
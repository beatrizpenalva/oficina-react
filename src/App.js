import './App.css';
import User from './components/User';

const users = [
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
    const listUsers = users.map((user) => <User name={user.name} description={user.description}/>)
    return listUsers
}

export default App;

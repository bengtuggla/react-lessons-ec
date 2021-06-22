import './App.css';
import Person from './components/Person';
import { useState } from 'react';
import Post from './components/Post';
import AddCustomersForm from './components/AddCustomersForm';
import CustomerList from './components/CustomerList';
function App() {
  const onClick = () => {
    console.log('KLICKAT!');
  };

  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const [posts] = useState([
    {
      id: 1,
      title: 'Post 1',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, deserunt',
    },
    {
      id: 2,
      title: 'Post 2',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, deserunt',
    },
    {
      id: 3,
      title: 'Post 3',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, deserunt',
    },
  ]);

  const [changeColor, setChangeColor] = useState(false);
  const change = () => {
    setChangeColor(!changeColor);
  };

  const [customers, setCustomers] = useState([
    {
      id: 'wehföwiufh12',
      name: 'Bengt',
    },
  ]);

  const addCustomerCallback = (inputCustomer) => {
    setCustomers((oldCustomers) => {
      return [
        ...oldCustomers,
        { id: Date.now().toString(), name: inputCustomer },
      ];
    });
  };

  const deleteCustomerCallback = (id) => {
    setCustomers((oldCustomers) =>
      oldCustomers.filter((customer) => customer.id !== id)
    );
  };

  return (
    <div>
      HEJ
      <button onClick={onClick}>Klicka här</button>;
      <div className='persons'>
        <Person name='Bengt' age='61' />
        <Person name='Nils' age='65' />
        <Person name='Olle' age='41' />
        <Person name='Kalle' age='21' />
      </div>
      <br />
      <h1 className={`${changeColor ? 'brown' : ''}`}>{counter}</h1>
      <button onClick={increment}>ÖKA</button>
      <br />
      <button onClick={login}>{isLoggedIn ? 'Logga Ut' : 'Logga In'}</button>
      <h1>{isLoggedIn ? 'INLOGGAD' : 'UTLOGGAD'}</h1>
      <br />
      <h1>POSTS</h1>
      {posts.map((post) =>
        isLoggedIn ? (
          <Post title={post.title} body={post.body} key={post.id} />
        ) : (
          'NÄHÄ'
        )
      )}
      <br />
      <button onClick={change}>CHANGE COUNTER COLOR</button>
      <br />
      <br />
      <AddCustomersForm addCustomerCallback={addCustomerCallback} />
      <CustomerList
        customers={customers}
        deleteCustomerCallback={deleteCustomerCallback}
      />
    </div>
  );
}

export default App;

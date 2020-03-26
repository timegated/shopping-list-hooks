import React from 'react';
import AppNavbar from './components/Navbar/Navbar';
import ShoppingList from './components/ShoppingList/ShoppingList';
import ItemModal from './components/ItemModal/ItemModal';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <AppNavbar />
        <Container>
        <ItemModal />
        <ShoppingList />
        </Container>
        
    </div>
    </Provider>
 
  );
}

export default App;

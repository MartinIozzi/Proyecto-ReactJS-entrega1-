import './App.css';
import './componentes/header/Navbar.css';
import Navbar from './componentes/header/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer'
import Cart from './containers/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CustomProvider } from './CustomContext';



function App() {

  const userName = 'Martin';
  const greeting = 'Novedades';

  return (
    <>
    <BrowserRouter>
      <CustomProvider>
      <Navbar name={userName} />
      <Routes>
        <Route path='/'
          element={<ItemListContainer greeting={greeting} />} />

        <Route path='/category/:name'
        element={<ItemListContainer greeting={greeting}/>}/>

        <Route
          path="/productos/:id" //lo que va despues de los : son params (en este caso el params es el id)
          element={<ItemDetailContainer />}
        />

        <Route path="/cart" element={<Cart />} />
      </Routes>
      </CustomProvider >
    </BrowserRouter>
    </>
  );
}

export default App;


import './App.css';
import Hero from './Component/Hero/Hero';
import Nav from './Component/Nav/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Component/Search/Search';
import CategoryCarosel from './Component/Categories/CategoryCarosel';
import Home from './Component/Home/Home';
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import ExerciseDetails from './Component/ExerciseDetails/ExerciseDetails';
import AllCategories from './Component/AllCategories/AllCategories';
import { Provider } from 'react-redux';
import store from './Component/Store/Store';
import './Component/Responsive.css'
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Provider store={store} >
     <Nav/>
     <Routes>
     <Route path='/' element={<Home/>}  />
     <Route path='/:id' element={<ExerciseDetails/>} />
     </Routes>
     <Footer/>
     </Provider>
     </BrowserRouter>
    </>
  );
}

export default App;

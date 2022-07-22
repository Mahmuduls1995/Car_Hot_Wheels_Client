import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import CarsCollection from './pages/CarsCollection/CarsCollection';
import NotFound from './pages/NotFound/NotFound';
import AuthProvider from './components/Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CarDetals from './pages/CarDetails/CarDetals';
import BookingCar from './pages/CarDetails/CarBooking/BookingCar';
import Contact from './pages/Contact/Contact';
import UserLogin from './pages/Login/Login/UserLogin';
import UserRegister from './pages/Login/Register/UserRegister';
import MainDashboard from './pages/MainDashboard/MainDashboard';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/carsCollection">
              <CarsCollection></CarsCollection>
            </Route>
            <Route path="/carDetails/:id">
              <CarDetals></CarDetals>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <UserLogin/>
            </Route>          
            <PrivateRoute path="/dashboard">
              <MainDashboard/>
            </PrivateRoute>          
            <PrivateRoute path="/carBooking/:id">
              <BookingCar></BookingCar>
            </PrivateRoute>
            <Route path="/register">
              <UserRegister/>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

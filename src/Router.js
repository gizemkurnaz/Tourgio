import React from 'react';
import { Scene, Router, Drawer, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import RegisterPage from './components/RegisterPage';
import HomePage  from './components/HomePage';
import DetailPage from './components/DetailPage';
import SideBar from './components/SideBar';
import DestinationPage from './components/DestinationPage';
import FilterPage from './components/FilterPage';
import { Destination } from './ortak';
const RouterComponent = () => {
return(
    <Router sceneStyle ={{marginTop: 65}}>
       
        <Scene key = "main">
       
        <Scene key ='loginScreen' component={LoginForm} hideNavBar/>
        <Scene key='registerScreen' component={RegisterPage} hideNavBar/>
        <Scene key = 'destinationScreen' component ={DestinationPage} hideNavBar/>
        <Scene key='homeScreen' component={HomePage} hideNavBar />
        <Scene key ='detailScreen' component={DetailPage} hideNavBar/>
        
        
        </Scene>
      
    </Router>
    );

};

export default RouterComponent;
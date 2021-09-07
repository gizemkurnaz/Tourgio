import React,{Component} from 'react';
import { View} from 'react-native';
import {Provider} from 'react-redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';



class Main extends Component{

    componentDidMount(){

        if (firebase.apps.length === 0){

            firebase.initializeApp({
                apiKey: "AIzaSyAmwCM5TgsgK120eOam6cKk9CBg-Ewjxhk",
                authDomain: "tourgio-624ae.firebaseapp.com",
                databaseURL: "https://tourgio-624ae.firebaseio.com",
                projectId: "tourgio-624ae",
                storageBucket: "tourgio-624ae.appspot.com",
                messagingSenderId: "SENDER_ID",
                appId: "APP_ID",
                measurementId: "G-MEASUREMENT_ID",
               
              });

        }
       
          
    }

render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
        <Provider store= {store}>
            <Router/>
        </Provider>
    );
    
}

}


export default Main;
import React from 'react';
import { registerRootComponent } from 'expo';
import Routes from './routes';
import './config/statusBarConfig';

const App = () =><Routes/>;
export default App;

registerRootComponent(App);
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Main from './pages/main';

const AppNavigator = createStackNavigator({
    Main:{
        screen: Main,
        navigationOptions: () => ({
            headerStyle:{
                backgroundColor: '#DA553F'
            },
            headerTintColor: '#FFF',
           
          })
        }
   
});
   
  export default createAppContainer(AppNavigator);

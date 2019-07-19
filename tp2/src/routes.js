import {createStackNavigator, createAppContainer} from 'react-navigation';
import Main from './pages/main';
import Product from './pages/products';

const AppNavigator = createStackNavigator({
    Main:{
        screen: Main,  
        navigationOptions: () => ({
          headerStyle:{
              backgroundColor: '#32CD32'
          },
          headerTintColor: '#FFF',
                     
        })      
        },
        Product:{
          screen: Product,
          navigationOptions: () => ({
            headerStyle:{
                backgroundColor: '#32CD32'
            },
            headerTintColor: '#FFF',
                       
          })
        },
        
   
});
   
  export default createAppContainer(AppNavigator);

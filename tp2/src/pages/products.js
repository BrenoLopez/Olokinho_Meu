import React from 'react';
import {WebView} from 'react-native';

const Product = ({navigation}) =>(
    <WebView source={{uri: navigation.state.params.product.url}}/>
); 

Product.navigationOptions = ({navigation}) => ({
       title:  navigation.state.params.product.title,
       headerTitleStyle: { flex: 0.8, textAlign: 'center'} 
});
export default Product;

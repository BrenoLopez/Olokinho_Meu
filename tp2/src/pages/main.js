import React,{Component} from "react";
import {View,Text} from 'react-native';
import api from '../services/api';


export default class Main extends Component{
   static navigationOptions = {
        title: 'Olokinho Meu.js',              
    };

    state = {
        docs: []
    };
    componentDidMout(){
        this.loadProducts();      
    }

    loadProducts = async () =>{
        const response = await api.get('/products');
        const {docs} = response.data;        
        this.setState({docs});
    }
    render(){
        return(
            <View>
                <Text>Página Main:</Text>
                {this.state.docs.map(product=>{
                    return(<Text>{product.title}</Text>);
                })}
            </View>
        );
    }
}
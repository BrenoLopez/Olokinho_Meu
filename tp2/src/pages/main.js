import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import api from '../services/api';



export default class Main extends Component {
    static navigationOptions = {
        
        title: 'Olokinhooooo meu !!!',
        headerTitleStyle: { flex: 1, textAlign: 'center'} 

    };

    constructor(props){
        super(props);
        this.state = ({
            productInfo:{},
            docs: [],
            page :1
        });
    } 

    componentDidMount() {
        this.loadProducts();
        
    }
    
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);  
             
            const { docs, ...productInfo } = response.data;
            
            this.setState({ 
                docs: [...this.state.docs, ...docs],
                 productInfo,
                 page 
                });  
              
        
    }
    renderItem =({item})=>(
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <TouchableOpacity style={styles.productButton} onPress={()=>{
                this.props.navigation.navigate('Product',{product: item})
            }}><Text style={styles.productButtonText}>Acessar</Text></TouchableOpacity>
        </View>
    )
    loadMore = () =>{
        const {page, productInfo} = this.state;
        if(page === productInfo.page){
            return;
        }
        const pageNumber = page + 1;
        this.loadProducts(pageNumber);
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList contentContainerStyle={styles.list} data={this.state.docs} keyExtractor={item => item._id } renderItem={this.renderItem} onEndReached={this.loadMore} onEndReachedThreshold={0.1}/>
                </View>
      
        );
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',

    },
    list: {
        padding: 20
    },
    productContainer: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },
    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'

    },
    productDescription: {
        fontSize: 16,
        color: '#999',
        marginTop: 5,
        lineHeight: 24
    },
    productButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#00FF7F',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    productButtonText: {
        fontSize: 16,
        color: '#00FF7F',
        fontWeight: 'bold'
    }

});
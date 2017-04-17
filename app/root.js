import React, { Component } from 'react';
import {  
    Text,
    View,
    StatusBar
} from 'react-native';


import ExamplePage from './examplePage';

import { StackNavigator } from 'react-navigation';

const ExampleScreen = StackNavigator({
    ExamplePage: {screen: ExamplePage}
},
{
    navigationOptions: ({navigation}) => {
        return {
            headerTitle: 'MBProgressHUD',
            headerStyle: {backgroundColor: 'rgb(69,149,252)'},
            headerTitleStyle: {color: 'white',fontSize: 18},
        }
    }
});


class Root extends Component {


    render(){
        return(
            <View style={{flex: 1}}>
                <StatusBar
                    backgroundColor="rgb(69,149,252)"
                    barStyle="light-content"
                />
                <ExampleScreen />
            </View>
        );
    }
}

export default Root;
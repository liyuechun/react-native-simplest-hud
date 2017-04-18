import React, { Component } from 'react';
import {  
    Text,
    View,
    StatusBar,
    Image
} from 'react-native';


import ExamplePage from './examplePage';
import MePage from './mePage';
import { StackNavigator,TabNavigator } from 'react-navigation';

const ExampleNav = StackNavigator({
    ExamplePage: {screen: ExamplePage}
},
{
    navigationOptions: ({navigation}) => {
        return {
            headerTitle: 'RNProgressHUD',
            headerStyle: {backgroundColor: 'rgb(69,149,252)'},
            headerTitleStyle: {color: 'white',fontSize: 18},
            tabBarIcon: ({focused}) => {
                return (
                    focused ? <Image
                        source={require("./images/tab_home_pressed.png")}
                        style={{width: 20,height: 20}}
                    /> :
                    <Image
                        source={require("./images/tab_home_normal.png")}
                        style={{width: 20,height: 20}}
                    />
                )
            }
        }
    }
});

const meNav = StackNavigator({
    MePage: {screen: MePage}
},
{
    navigationOptions: ({navigation}) => {
        return {
            headerTitle: '联系我',
            headerStyle: {backgroundColor: 'rgb(69,149,252)'},
            headerTitleStyle: {color: 'white',fontSize: 18},
            tabBarIcon: ({focused}) => {
                return (
                    focused ? <Image
                        source={require("./images/tab_me_pressed.png")}
                        style={{width: 20,height: 20}}
                    /> :
                    <Image
                        source={require("./images/tab_me_normal.png")}
                        style={{width: 20,height: 20}}
                    />
                )
            }
        }
    }
});

// 创建TabBar
let TabBar = TabNavigator({
    ExampleNav: {screen: ExampleNav},
    meNav: {screen: meNav}
},
{
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: 'rgb(250,126,30)',
        inactiveTintColor: 'rgb(142,142,143)',
        style: {
            backgroundColor: 'rgb(241,241,241)'
        }
    },
    swipeEnabled: false //是否允许tabBar手势切换
});




class Root extends Component {


    render(){
        return(
            <View style={{flex: 1}}>
                <StatusBar
                    backgroundColor="rgb(69,149,252)"
                    barStyle="light-content"
                />
                <TabBar />
            </View>
        );
    }
}

export default Root;
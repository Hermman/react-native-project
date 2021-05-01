/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  SafeAreView,
  InputText
} from 'react-native';
import TabBar from './src/components/TabBar';
import HomePage from './src/pages/home'
import ShopCarPage from './src/pages/shoppingCar'
import MinePage from './src/pages/mine'

const dataSource = [
  {
    icon: require('./src/images/menu.png'),
    selectedIcon: require('./src/images/menu.png'),
    tabPage:'Home',
    tabName:'首页',
    component:HomePage
  },
  {
    icon: require('./src/images/menu.png'),
    selectedIcon: require('./src/images/menu.png'),
    tabPage:'ShopCar',
    tabName:'购物车',
    component:ShopCarPage
  },
  {
    icon: require('./src/images/menu.png'),
    selectedIcon: require('./src/images/menu.png'),
    tabPage:'Mine',
    tabName:'我的',
    component:MinePage
  }
];
//

const tabBars1 = [{
  title: '首页',
  color: {
    fontSize: 10,
      color: 'red'
  },
  selectedColor: {
    fontSize: 10,
      color: 'red'
  },
  iconPath: require('./src/images/menu.png'),
  selectedIconPath: require('./src/images/menu.png'),

},
{
  title: '购物车',
  color: {
      color: 'red'
  },
  selectedColor: {
      color: 'red'
  },
  iconPath: require('./src/images/menu.png'),
  selectedIconPath: require('./src/images/menu.png'),

},
{
  title: '我的',
  color: {
      color: 'red'
  },
  selectedColor: {
      color: 'red'
  },
  iconPath: require('./src/images/menu.png'),
  selectedIconPath: require('./src/images/menu.png'),

}]

export default class App extends Component {

  constructor(props){  
      super(props)  
      this.state={  
          selectedTab:'首页',  
      }  
  }

  render() {
    return (
      <View style={styles.container}>
          <TabBar tabBars={dataSource}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666666',
  },
});


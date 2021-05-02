import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import TabBar from './src/components/TabBar';
import HomePage from './src/pages/home'
import ShopCarPage from './src/pages/shoppingCar'
import MinePage from './src/pages/mine'

const tabBars = [
  {
    icon: require('./src/images/menu.png'),
    selectedIcon: require('./src/images/menu.png'),
    tabPage: 'Home',
    tabName: '首页',
    component: HomePage
  },
  {
    icon: require('./src/images/menu.png'),
    selectedIcon: require('./src/images/menu.png'),
    tabPage: 'ShopCar',
    tabName: '购物车',
    component: ShopCarPage
  },
  {
    icon: require('./src/images/menu.png'),
    selectedIcon: require('./src/images/menu.png'),
    tabPage: 'Mine',
    tabName: '我的',
    component: MinePage
  }
];

const App = (props) => {

  return (
    <View style={styles.container}>
      <TabBar tabBars={tabBars} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666666',
  },
});

export default App;

import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import TabNavigator from 'react-native-tab-navigator'


const TabBar = (props) => {
  const { tabBars = [] } = props;
  const [selected, setSelected] = useState('Home')
  let navigation = null;
 
  let tabViews = tabBars.map((item, i) => {
    return (
      <TabNavigator.Item
        title={item.tabName}
        selected={selected === item.tabPage}
        titleStyle={{ color: '#999999' }}
        selectedTitleStyle={{ color: '#ED5100' }}
        renderIcon={() => <Image style={styles.tabIcon} source={item.icon} />}
        renderSelectedIcon={() => <Image style={styles.tabIcon} source={item.selectedIcon} />}
        tabStyle={{ alignSelf: 'center' }}
        onPress={() => setSelected(item.tabPage)}
        key={i}
      >
        <item.component navigation={navigation} />
      </TabNavigator.Item>
    );
  });

  return (
    <View style={styles.container}>
      <TabNavigator
        hidesTabTouch={false}
      >
        {tabViews}
      </TabNavigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  tabIcon: {
    width: 30,
    height: 30,
  }
});

export default TabBar;
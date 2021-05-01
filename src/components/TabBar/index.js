import React, { Component } from 'react'
import { 
  View, 
  Text, 
  Image,
  StyleSheet
} from 'react-native'
import TabNavigator  from 'react-native-tab-navigator'


var navigation = null;
 
export default class TabBar extends Component {
 
  constructor(props) {
    super(props);
    navigation = null;
    this.state = {
      selectedTab:'Home'
    };
  }
 
  render() {
    const { tabBars = []} = this.props;
 
    let tabViews = tabBars.map((item,i) => {
      return (
          <TabNavigator.Item
            title={item.tabName}
            selected={this.state.selectedTab===item.tabPage}
            titleStyle={{color:'#999999'}}
            selectedTitleStyle={{color:'#ED5100'}}
            renderIcon={()=><Image style={styles.tabIcon} source={item.icon}/>}
            renderSelectedIcon = {() => <Image style={styles.tabIcon} source={item.selectedIcon}/>}
            tabStyle={{alignSelf:'center'}}
            onPress = {() => {this.setState({selectedTab:item.tabPage})}}
            key={i}
            >
            <item.component navigation={navigation}/>
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
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  tabIcon:{
    width:23,
    height:23,
  }
});
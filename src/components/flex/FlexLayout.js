import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FlexLayout = (props) => {
  
  return (
    <View style={styles.wrapper}>
      <Text style={[styles.item,styles.item1]}>1</Text>
      <Text style={[styles.item,styles.item2]}>4</Text>
      <Text style={[styles.item,styles.item3]}>7</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    // flexWrap: 'wrap',
    justifyContent: 'flex-end',
    backgroundColor: 'darkorange',
    height: 200,
    width: 200,
    // border: 1,
  },
  item: {
    width: 50,
    height: 50,
    fontSize: 22,
    textAlign: 'center',
    margin: 10
  },
  item1: {
    backgroundColor: 'blue'
  },
  item2: {
    backgroundColor: 'red'
  },
  item3: {
    backgroundColor: 'green'
  }
})

export default FlexLayout;

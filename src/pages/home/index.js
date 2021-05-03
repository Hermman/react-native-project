import React from 'react'
import { View } from 'react-native'
// import FlexLayout from '@components/flex/FlexLayout'
import TodoList from '@components/TodoList'

const Home = (props) => {

  return (
    <View>
      {/* <FlexLayout /> */}
      <TodoList />
    </View>
  )
}
export default Home;

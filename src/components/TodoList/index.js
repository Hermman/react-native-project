import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import CheckBox from '@react-native-community/checkbox';

const list = [
  { todo: 'html' },
  { todo: 'css' },
  { todo: 'javascript' },
  { todo: 'nodejs' },
  { todo: 'react.js' },
  { todo: 'vue.js' },
]

const TodoList = (props) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.todoWrapper}>
      {list.map((item, index) => (
        <View style={styles.todoItem} key={`todo-${index}`}>
          <CheckBox
            value={isSelected}
            onValueChange={() => setSelection(!isSelected)}
            style={styles.checkbox}
            tintColors={{ true: '#F15927', false: '#FFCEA0' }}
            // style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
          />
          <Text style={styles.item}>{item.todo}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  todoWrapper: {
    margin: 50,
    padding: 20,
    fontSize: 20,
    color: '#ddd',
    // backgroundColor: '#ccc'
  },
  todoItem: {
    // flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  checkbox: {
    // height: 50,
    // width: 50,
    // borderWidth: 1,         
    // backgroundColor: '#FF5147',
    // borderColor: 'green',   
    // borderStyle: 'dotted'
  },
  item: {
    marginLeft: 10,
  },
})

export default TodoList;

/**
 * @format
 */
import React from 'react'
import {AppRegistry, NativeModules} from 'react-native';
const { UIManager } = NativeModules
import App from './App';
import {name as appName} from './app.json';

// 在执行任何动画代码之前，比如在入口文件app.js中执行
UIManager.setLayoutAnimationEnbleEXperimental && 
UIManager.setLayoutAnimationEnbleEXperimental(true)

AppRegistry.registerComponent(appName, () => App);

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import TodoHeader from './src/component/TodoHeader';
import TodoList from './src/component/TodoList';
import { Provider } from "react-redux";
import store from "./src/Redux/store";


export default function App() {

  const RootApp = () => {
    return (
      <SafeAreaView>
        <TodoHeader />
        <TodoList/>
      </SafeAreaView>
    )
  }
  return (
    <Provider store={store}>
    <View style={{backgroundColor: '#D3F36B'}}>
      <RootApp/>
    </View>
    </Provider>
  );
}

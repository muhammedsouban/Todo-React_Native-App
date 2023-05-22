import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addTask}  from "../Redux/taskslice.js";


const TodoHeader = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const onSubmitTask = () => {
    if (todo.trim().length === 0) {
      Alert.alert("You need to enter a task");
      setTodo("");
      return;
    }

    dispatch(
      addTask({
        task: todo,
      })
    );
    setTodo("");
  };

  return (
    <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={{
        fontSize:20,
        fontWeight:'bold',
        marginTop:20,
        textAlign:'center'}}>Todo List</Text>
    <TextInput 
    style={{borderColor:'grey',
    borderWidth:1,
    padding:10,margin:10,width:"80%",
    borderRadius:5}}
    placeholder="Add todo"
    onChangeText={setTodo}
    value={ todo}
    />
<TouchableOpacity
style={{backgroundColor:'green',
padding:10,margin:10,width:"80%",
borderRadius:5,
alignItems:'center'}}
onPress={onSubmitTask}
>
<Text style={{color:'white',fontWeight:'bold'}}>Add</Text>
</TouchableOpacity>
    </View>
  )
}

export default TodoHeader

const styles = StyleSheet.create({})
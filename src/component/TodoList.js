import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Alert
  } from "react-native";
  import React from "react";
  //Ionicons
  import { Ionicons } from "@expo/vector-icons";
  import { useSelector } from "react-redux";
  import { deleteTask } from "../Redux/taskslice.js";
  import { useDispatch } from "react-redux";
  
  const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.tasks);
    const onDelete = (id) => {
        Alert.alert(
          "Confirm Deletion",
          "Are you sure you want to delete this task?",
          [{
              text: "Cancel",
              style: "cancel",
            },
            {
              text: "Delete",
              style: "destructive",
              onPress: () => {dispatch(deleteTask({ id: id }));
              }
            }])};

const renderItem=({item})=>{
return(
    <View style={styles.item}>
<Text style={{color:'green',fontWeight:'bold'}}>{item.name}</Text>
<TouchableOpacity
style={{backgroundColor:'red',
padding:5,margin:5,width:"30%",
borderRadius:5,
alignItems:'center'}}
onPress={()=>{
    onDelete(item.id)
}}
>
<Text style={{color:'white',fontWeight:'bold',borderRadius:5,padding:5,width:'100%'}}>Delete</Text>
</TouchableOpacity>
    </View>
)
}
  return (
    <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={styles.subtitle}>Task</Text>
      <FlatList style={{width:"80%"}} data={todos}
      renderItem={renderItem}
      keyExtractor={(item)=>item.id.toString()}
      />
    </View>
  )
}

export default TodoList

const styles = StyleSheet.create({
    item:{
        backgroundColor:'white',
    padding:10,marginBottom:10,
    borderRadius:5,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
    },
    subtitle:{
        fontWeight:'bold',
        marginBottom:10,

    }
})
import { View, Text, TextInput, ScrollView } from "react-native";
import React from "react";
import { Button } from "@react-native-material/core";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db2 } from "../Firebase";

export default function Complain({ route, navigation }) {
  const { name, email, number } = route.params;
  const [complain, setComplain] = React.useState('');
  const [error, seterror] = React.useState("");
  const [text, settext] = React.useState("");

// 

const handlePress = async () => {
    if (complain=="") {
        seterror("Please Fill The Complain Section")
    settext('');
    }
    else{
        seterror("");
        try {
      await addDoc(collection(db2, "complains"), {
        user_email: email,
        user_name: name,
        user_number: number,
        complaint:complain,
        entrydate: serverTimestamp(),
      });
      settext('Submitted');
      seterror('');
      setComplain('');
    } catch (err) {
      seterror("Something Went Wrong");
      settext('');
    }
}
  };


// 
  return (
        <View style={{ flex: 1, backgroundColor: "#2C2B3C",  }}>
    < ScrollView >
    <View style={{alignItems:'center', justifyContent:'center', gap:20, marginTop:40}}>
      <View
        style={{
          borderColor: "#B76D68",
          height: 50,
          width: "90%",
          borderWidth: 3,
          borderRadius:12,
          justifyContent:'center',
          alignItems:'center',
        }}
      >
        <Text style={{fontSize:25, fontWeight:'bold', color:'#acadac'}}>{name}</Text>
      </View>
        <View
        style={{
          borderColor: "#B76D68",
          height: 50,
          width: "90%",
          borderWidth: 3,
          borderRadius:12,
          justifyContent:'center',
          alignItems:'center',
        }}
      >
        <Text style={{fontSize:25, fontWeight:'bold', color:'#acadac'}}>{email}</Text>
      </View>
        <View
        style={{
          borderColor: "#B76D68",
          height: 50,
          width: "90%",
          borderWidth: 3,
          borderRadius:12,
          justifyContent:'center',
          alignItems:'center',
        }}
      >
        <Text style={{fontSize:25, fontWeight:'bold', color:'#acadac'}}>{number}</Text>
      </View>
        <View keyboardShouldPersistTaps='handled'
        style={{
          borderColor: "#B76D68",
          height: 250,
          width: "90%",
          borderWidth: 3,
          borderRadius:12,
        }}

      >
        <TextInput
        editable
        multiline
        placeholder="Your Complain........"
        placeholderTextColor='gray'
        numberOfLines={10}
        onChangeText={text => setComplain(text)}
        value={complain}
        style={{ margin:5, height:225,color:'white'}}
      />
      
      </View>
       <Button
              style={{ backgroundColor: "#B76D68" }}
              tintColor="#2C2B3C"
              title="Submit"
              onPress={() => handlePress()}
            />
            <Text style={{color: 'green', fontWeight:'bold'}}>{text}</Text>
            <Text style={{color:'red', fontWeight:'bold', top:-30}}>{error}</Text>
            </View>
    </ScrollView>
   </View>
  );
}

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

const [randomBackground , setRandomBackground] = useState('#FFFFFF')


generateColor = ()=> 
{
  const hexRange = '1234567890ABCDEF'
  let color = '#' 

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random()*16)]
      
    }

    setRandomBackground(color)

}


  return (
    <View style={[styles.container, {backgroundColor : randomBackground}]}>
          <StatusBar backgroundColor={randomBackground} />
          <View style={[styles.container1]}>
            <TouchableOpacity onPress={generateColor}>
              <View style={styles.actionBtn}>
                <Text style={styles.actionBtnText}>Click me !!!!</Text>
              </View>
            </TouchableOpacity>
          </View>
     </View>
  );
}

const styles = StyleSheet.create({
  container:
   {
    marginTop: 40,
     flex:1,
     alignItems: "center",
     justifyContent: "center",
    
   },

  actionBtn:
  {
    borderRadius:12,
    backgroundColor:'#6A1B4D',
    paddingHorizontal:10,
    paddingVertical:40

  }, 
  actionBtnText:
  {
    fontSize:24,
    color:'#FFFFFF',
    textTransform:'uppercase'

  }
   
});

  

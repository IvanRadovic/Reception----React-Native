import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { useRoute } from "@react-navigation/native";

const Hours = () => {
  const route = useRoute();
  const selectedDay = route.params?.selectedDay;

  return (
    <View style={styles.container}>
        <View style={styles.headingContainer}>
            <Text style={styles.headingText}>{selectedDay.dateString}</Text>
        </View>
    </View>
  );
};

export default Hours;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:100
    },
    headingContainer:{
        width:'100%'
    },
    headingText:{
        textAlign:'center',
        fontSize:20
    }

    
});
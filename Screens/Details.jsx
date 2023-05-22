import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import Colors from "../Constants/Colors";

const Details = ({ route }) => {

    const { info } = route.params;

      return (
        <View style={styles.container}>
            <ScrollView style={styles.infoContainer}>
                {info.map((hotel) => (
                <Pressable key={hotel.id} style={styles.infoItem}>
                    <View>
                        {/* Slika */}
                    </View>
                    <View>
                        <Text style={styles.infoName}>{hotel.name}</Text>
                        <View>
                            <Text style={styles.infoUsername}>{hotel.username}</Text>
                        </View>
                    </View>
                </Pressable>
                ))}
            </ScrollView>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop:55,
        justifyContent:'flex-start'
      },
      infoContainer: {
        paddingHorizontal:10,
        marginTop: 40,
      },
      infoItem:{
        width:'100%',
        backgroundColor:Colors.primmaryColor200,
        marginBottom:10,
        padding:15,
        borderRadius:10
      },
      infoName: {
        fontSize: 16,
      },
      infoUsername: {
        fontSize: 13,
        color:'black'
      },
    });
    
export default Details;
import { View, Text, StyleSheet, ScrollView, Pressable, Image } from "react-native";
import Colors from "../Constants/Colors";
import  { Ionicons }  from "@expo/vector-icons";

const Details = ({ route, navigation }) => {

    const { info } = route.params;

    const handleDetails = () => {
      navigation.navigate('Calendar')
    }

      return (
        <View style={styles.container}>
            <ScrollView style={styles.infoContainer}>
                {info.map((hotel) => (
                <Pressable onPress={handleDetails} key={hotel.id} style={styles.infoItem}>
                    <View style={styles.infoImg}>
                      <Image style={styles.img} source={require('../assets/images/room.webp')} />
                    </View>
                    <View style={styles.infoDetails}>
                        <Text style={styles.infoName}>{hotel.name}</Text>
                        <View style={styles.infoUserContainer}>
                            <Text style={styles.infoUsername}>
                              {/* <Ionicons name="people-outline" size={20} style={styles.iconStyle} />  */}
                              <Text>  Adults: {hotel.max_adults}, </Text>
                              <Text>  Children: {hotel.max_children}</Text>
                            </Text>
                        </View>
                        <View style={styles.infoPriceContainer}>
                          <Text style={styles.infoPrice}><Ionicons name="cash-outline" size={16} style={styles.iconStyle} /> {hotel.base_price.slice(0, -2)} $</Text>
                        </View>
                        <View style={styles.containerDates}>
                            <Text style={styles.textDates}>Check dates <Ionicons name="calendar-outline" size={16} style={styles.iconStyle} /></Text>
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
        backgroundColor:Colors.backgroundColor400,
        marginBottom:10,
        padding:15,
        borderRadius:10,
        borderWidth:2,
        borderColor:Colors.backgroundColor100,
        flexDirection:'row'
        
      },
      infoImg:{
        width:'50%',
        height:'100%'
      },
      img:{
        width:130,
        height:130
      },
      infoDetails:{
          width:'50%'
      },
      infoName: {
        fontSize: 20,
        textAlign:'center'
      },
      infoUserContainer: {
        // margin:10,
        paddingHorizontal:8,
        width:'100%',
        
      },
      infoUsername: {
        fontSize: 13,
        color:'black',
        marginVertical:8,
        width:'100%',
        textAlign:'center'

      },
      iconStyle:{
        marginHorizontal:10
      },
      infoPriceContainer: {
        marginHorizontal:8,
      },
      infoPrice:{
        fontSize:18,
        marginHorizontal:8,
      },
      containerDates: {
        width:'100%',
        marginTop:10,
      },
      textDates:{
        textAlign:'center'
      }
    });
    
export default Details;
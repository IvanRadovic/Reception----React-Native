import { View, StyleSheet, Dimensions} from "react-native";
import { Calendar as BigCalendar, CalendarList, Agenda } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("window");

const Calendar = () => {
  const navigation = useNavigation();

  const reservedDates = {
    "2023-05-26": { textColor: "red", dotColor:'red'},
    "2023-05-27": { textColor: "red", dotColor:'red'},
    "2023-05-28": { textColor: "red", dotColor:'red'},
    "2023-05-29": { textColor: "red", dotColor:'red'},
    "2023-05-30": { textColor: "red", dotColor:'red'},
    "2023-06-10": { textColor: "red", dotColor:'blue'},
    "2023-06-11": { textColor: "red", dotColor:'blue'},
    "2023-06-12": { textColor: "red", dotColor:'blue'},
  };

  const reservedPeriods = [
    {
      startingDay: "2023-06-01",
      endingDay: "2023-06-05",
      color: "red",
      dotColor: "blue",
      selectedDotColor: "blue",
    },
    {
      startingDay: "2023-06-15",
      endingDay: "2023-06-20",
      textColor: "red",
      dotColor: "red",
      selectedDotColor: "blue",
    },
  ];

  const finalDates = {...reservedDates, ...reservedPeriods}


  const handleDayPress = (day) => {
    navigation.navigate("Hours", { selectedDay: day });
  };

    return ( 
      <View style={styles.calendarContainer}>
        <CalendarList
          onDayPress={handleDayPress}
          markedDates={finalDates}
          markingType="period"
        />
      </View>
     );
}
 
export default Calendar;

const styles = StyleSheet.create({
    calendarContainer:{
        flex:1,
        height:height,
        paddingTop: 90,
    },
});
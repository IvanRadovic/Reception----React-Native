import { View, StyleSheet } from "react-native";

// import format from "date-fns/format";
// import getDay from "date-fns/getDay";
// import parse from "date-fns/parse";

import { Calendar as BigCalendar } from 'react-native-big-calendar';




const Calendar = () => {
    // const localizer = dateFnsLocalizer({
    //   format,
    //   parse,
    //   startOfWeek,
    //   getDay,
    //   locales,
    // });

    const events = [
      {
        title: 'Chec  - in',
        start: new Date(new Date().setDate(new Date().getDate())),
        end: new Date(new Date().setHours(new Date().getHours() + 1)),
      },
      {
        title: 'Chec  - in     ',
        start: new Date(new Date().setDate(new Date().getDate() + 1)),
        end: new Date(new Date().setHours(new Date().getHours() + 1)),
      }
      ];
    return ( 
        <View style={styles.calendarContainer}>
             <BigCalendar events={events} height={300}  startAccessor="start" endAccessor="end" />
        </View>
     );
}
 
export default Calendar;

const styles = StyleSheet.create({
    calendarContainer:{
        flex:1,
        justifyContent:'center',
        paddingTop: 100,
    }
});
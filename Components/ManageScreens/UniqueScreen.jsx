import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";

import GeneralInformation from "./GeneralInformations/GeneralInformation";
import HotelAddress from "./GeneralInformations/HotelAdress";
import GeneralOther from "./GeneralInformations/Other";
import CustomButton from "../UI/CustomButton";


const UniqueScreen = () => {
    return (
        <View style={styles.uniqueContainer}>
            <ScrollView style={styles.scrollView}>
                <GeneralInformation />
                <HotelAddress />
                <GeneralOther />
            </ScrollView>
            <CustomButton title='Next' />
        </View>
    );
}
 
export default UniqueScreen;

const styles = StyleSheet.create({
    uniqueContainer:{
        flex:1,
        padding: 10,
        paddingBottom:30
    },
    scrollView:{
        marginBottom:28
    }
});
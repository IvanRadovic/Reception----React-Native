import { createStackNavigator } from "@react-navigation/stack";

import PropertyDetails from "../Screens/PropertyDetails";

const Stack = createStackNavigator();


const StackNavigator = () => {
    return (  
        <StackNavigator>
            <Stack.Screen name="ScreenOne" component={PropertyDetails} />
        </StackNavigator>
    );
}
 
export default StackNavigator;
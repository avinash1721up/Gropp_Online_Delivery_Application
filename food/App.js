import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/LoginSignupScreens/WelcomeScreen';
import LoginScreen from './src/screens/LoginSignupScreens/LoginScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './src/screens/LoginSignupScreens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import UserProfile from './src/screens/UserProfile';
import Productpage from './src/screens/Productpage';
import UserCart from './src/screens/UserCart';
import Placeorder from './src/screens/Placeorder';
import TrackOrder from './src/screens/TrackOrder';
export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="welcomepage">
        <Stack.Screen name="welcomepage" component={WelcomeScreen} 
        options={{
            headerShown:false,
        }
        }
        />
        <Stack.Screen name="signup" component={SignupScreen} 
        options={{
            headerShown:false,
        }
        }/>
        <Stack.Screen name="login" component={LoginScreen} 
        options={{
            headerShown:false,
        }
        }/>
        <Stack.Screen name="home" component={HomeScreen} 
        options={{
            headerShown:false,
        }
        }/>

        <Stack.Screen name='userprofile' component={UserProfile}
        options={{
          headerShown: false,
        }}/>

       <Stack.Screen name='productpage' component={Productpage}
        options={{
          headerShown: false,
        }}/>
          <Stack.Screen name='cart' component={UserCart}
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen name='placeorder' component={Placeorder}
        options={{
          headerShown: false,
        }}/>
         <Stack.Screen name='trackorders' component={TrackOrder}
        options={{
          headerShown: false,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
   // <RootNavigation/>
    //<WelcomeScreen/>
    //<LoginScreen/>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

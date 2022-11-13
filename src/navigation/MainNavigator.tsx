import {createStackNavigator} from '@react-navigation/stack';
import routes from 'src/constants/routes';
import {Login, Home, Product, Details, Checkout} from 'src/screens';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.LOGIN} component={Login} />
      <Stack.Screen name={routes.HOME} component={Home} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
};

export default MainNavigator;

import {StatusBar} from 'react-native';
import {colors} from 'src/constants';
import AppNavigator from 'src/navigation/AppNavigator';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />
      <AppNavigator />
    </>
  );
};

export default App;

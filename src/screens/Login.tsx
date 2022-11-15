import {SafeAreaView, Text, View} from 'react-native';
import styles from 'src/styles/Global.style';
import {
  LogoComponent,
  InputCard,
  FormInput,
  FormBtn,
  FormTxtBtn,
} from 'src/components';
import {colors} from 'src/constants';
import {FC} from 'react';
import routes from 'src/constants/routes';

interface LoginInterface {
  navigation: any;
}

const Login: FC<LoginInterface> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <LogoComponent />
      <InputCard title="LOGIN WITH YOUR VALID MOBILE NUMBER">
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Text
            style={{color: colors.SECONDARY, fontSize: 14, marginRight: 10}}>
            +94
          </Text>
          <FormInput type="number" placeholder="Mobile No:" />
        </View>
        <FormBtn label="SUBMIT" size="sm" type="success" />
      </InputCard>
      <View style={{marginVertical: 10, alignItems: 'center'}}>
        <Text style={{color: colors.SECONDARY, fontWeight: 'bold'}}>OR</Text>
      </View>
      <InputCard title="LOGIN WITH YOUR EXISTING ACCOUNT">
        <View style={{marginVertical: 5}} />
        <FormBtn label="DOMINO'S PASSWORD" size="sm" />
      </InputCard>
      <FormTxtBtn
        handler={() => navigation.navigate(routes.HOME)}
        label="Skip Login"
      />
    </SafeAreaView>
  );
};

export default Login;

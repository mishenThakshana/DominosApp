import {FC} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {
  SingleTopBar,
  FormInput,
  FormBtn,
  FormInpSm,
  PaymentCard,
} from 'src/components';
import {colors} from 'src/constants';
import routes from 'src/constants/routes';
import styles from 'src/styles/Global.style';

interface CheckoutInterface {
  navigation: any;
}

const Checkout: FC<CheckoutInterface> = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.rootContainer]}>
      <SingleTopBar navigation={navigation} />

      <ScrollView>
        <View style={styles.detailTitleContainer}>
          <Text style={styles.detailTitle}>Bank Details</Text>
        </View>
        <View style={styles.detailsContainer}>
          <FormInput placeholder="Name on card" />
          <FormInput placeholder="Card number" />
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.creditCardInputContainer}>
            <FormInpSm placeholder="MM/YY" />
            <FormInpSm placeholder="Year" />
            <FormInpSm placeholder="CVC" />
          </View>
        </View>
        <View style={[styles.detailTitleContainer]}>
          <Text style={{color: colors.SECONDARY, marginTop: 20, fontSize: 16}}>
            Total Amount <Text style={{fontWeight: 'bold'}}>Rs.3900</Text>
          </Text>
          <Text
            style={{color: colors.SECONDARY, marginVertical: 5, fontSize: 16}}>
            Shipping free
          </Text>
        </View>
        <View>
          <PaymentCard />
        </View>
        <View style={styles.detailsContainer}>
          <View style={{marginTop: 40, width: '80%'}}>
            <FormBtn
              handler={() => navigation.navigate(routes.CHECKOUT)}
              size="lg"
              label="Proceed"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checkout;

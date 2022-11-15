import {FC} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {SingleTopBar, ProductCard, FormInput, FormBtn} from 'src/components';
import {colors} from 'src/constants';
import routes from 'src/constants/routes';
import styles from 'src/styles/Global.style';

interface DetailsInterface {
  navigation: any;
}

const Details: FC<DetailsInterface> = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.rootContainer]}>
      <SingleTopBar navigation={navigation} />

      <ScrollView>
        <View style={styles.detailTitleContainer}>
          <Text style={styles.detailTitle}>Personal Details</Text>
        </View>
        <View style={styles.detailsContainer}>
          <FormInput placeholder="Name" />
          <FormInput placeholder="Contact No" />
        </View>
        <View style={{marginVertical: 10}} />
        <View style={styles.detailTitleContainer}>
          <Text style={styles.detailTitle}>Shipping Details</Text>
        </View>
        <View style={styles.detailsContainer}>
          <FormInput placeholder="No" />
          <FormInput placeholder="Street Address" />
          <FormInput placeholder="Postal Code" />
          <View style={{marginTop: 40, width: '80%'}}>
            <FormBtn
              handler={() => navigation.navigate(routes.CHECKOUT)}
              size="lg"
              label="Proceed to Checkout"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

import {FC} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {SingleTopBar, ProductCard} from 'src/components';
import styles from 'src/styles/Global.style';

interface ProductInterface {
  navigation: any;
}

const Product: FC<ProductInterface> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <SingleTopBar navigation={navigation} />
      <ProductCard navigation={navigation} />
    </SafeAreaView>
  );
};

export default Product;

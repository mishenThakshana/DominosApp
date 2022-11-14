import {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {
  Topbar,
  SectionHeading,
  DealsTab,
  PizzaMenu,
  BestSellers,
} from 'src/components';
import styles from 'src/styles/Global.style';

interface HomeInterface {
  navigation: any;
}

const Home: FC<HomeInterface> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Topbar location="Sri Lanka, Colombo" />
      <DealsTab />
      <SectionHeading title="Explore Menu" />
      <PizzaMenu navigation={navigation} />
      <SectionHeading title="Best Sellers" />
      <BestSellers />
    </SafeAreaView>
  );
};

export default Home;

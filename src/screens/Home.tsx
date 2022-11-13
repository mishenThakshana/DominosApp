import {SafeAreaView} from 'react-native';
import {
  Topbar,
  SectionHeading,
  DealsTab,
  PizzaMenu,
  BestSellers,
} from 'src/components';
import styles from 'src/styles/Global.style';

const Home = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Topbar location="Sri Lanka, Colombo" />
      <DealsTab />
      <SectionHeading title="Explore Menu" />
      <PizzaMenu />
      <SectionHeading title="Best Sellers" />
      <BestSellers />
    </SafeAreaView>
  );
};

export default Home;

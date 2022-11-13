//Images
import {View, FlatList} from 'react-native';
import {BestSellerCard} from 'src/components';
import {BSPizza1, BSPizza2} from 'src/assets/images';

interface BestSellerInterface {
  image: any;
  title: string;
  price: number;
}

const PizzaItems: BestSellerInterface[] = [
  {image: BSPizza1, title: 'Cheezy Pizza', price: 1000},
  {image: BSPizza2, title: 'Deviled Chicken Pizza', price: 1500},
  {image: BSPizza1, title: 'Delight Beef Pizza', price: 1800},
  {image: BSPizza2, title: 'Chilly Fried Pizza', price: 1600},
];

const BestSellers = () => {
  return (
    <View style={{marginHorizontal: 10}}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={PizzaItems}
        renderItem={({item}) => (
          <BestSellerCard
            image={item.image}
            title={item.title}
            price={item.price}
          />
        )}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

export default BestSellers;

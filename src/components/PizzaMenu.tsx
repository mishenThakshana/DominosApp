//Images
import {View, FlatList} from 'react-native';
import {MenuCard} from 'src/components';
import {MenuPizza1, MenuPizza2} from 'src/assets/images';
import {FC} from 'react';
import routes from 'src/constants/routes';

interface MenuPizzaInterface {
  image: any;
  title: string;
}

const PizzaItems: MenuPizzaInterface[] = [
  {image: MenuPizza1, title: 'Non-Veg Pizza'},
  {image: MenuPizza2, title: 'Loaded Pizza'},
  {image: MenuPizza2, title: 'Delight Pizza'},
  {image: MenuPizza2, title: 'Chilly Pizza'},
];

interface PizzaMenu {
  navigation: any;
}

const PizzaMenu: FC<PizzaMenu> = ({navigation}) => {
  return (
    <View style={{marginHorizontal: 10}}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={PizzaItems}
        renderItem={({item}) => (
          <MenuCard
            handler={() => navigation.navigate(routes.PRODUCT)}
            image={item.image}
            title={item.title}
          />
        )}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

export default PizzaMenu;

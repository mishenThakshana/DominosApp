import {FC} from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from 'src/styles/Global.style';

interface MenuCardInterface {
  image: any;
  title: string;
}

const MenuCard: FC<MenuCardInterface> = ({image, title}) => {
  return (
    <View style={styles.menuCardContainer}>
      <FastImage style={{width: 107, height: 107}} source={image} />
      <Text style={styles.menuTitle}>{title}</Text>
    </View>
  );
};

export default MenuCard;

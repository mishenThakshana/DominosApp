import {FC} from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from 'src/styles/Global.style';

interface MenuCardInterface {
  image: any;
  title: string;
  handler: () => void;
}

const MenuCard: FC<MenuCardInterface> = ({image, title, handler}) => {
  return (
    <View style={styles.menuCardContainer}>
      <TouchableOpacity onPress={handler}>
        <FastImage style={{width: 107, height: 107}} source={image} />
        <Text style={styles.menuTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuCard;

import {FC} from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from 'src/styles/Global.style';

interface BestSellerCardInterface {
  image: any;
  title: string;
  price: number;
}

const BestSellerCard: FC<BestSellerCardInterface> = ({image, title, price}) => {
  return (
    <View style={styles.bestCardCardContainer}>
      <FastImage
        style={{width: 180, height: 127, borderRadius: 10}}
        source={image}
      />
      <Text style={styles.menuTitle}>{title}</Text>
      <Text style={styles.bestSellingPrice}>Rs.{price}</Text>
    </View>
  );
};

export default BestSellerCard;

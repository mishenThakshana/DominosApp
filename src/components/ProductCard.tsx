import {FC, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import {CheezyPizza} from 'src/assets/images';
import {colors} from 'src/constants';
import styles from 'src/styles/Global.style';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {SizeBtn, FormBtn} from 'src/components';
import routes from 'src/constants/routes';

interface ProductCardInterface {
  navigation: any;
}

const ProductCard: FC<ProductCardInterface> = ({navigation}) => {
  const [selectedSize, setSelectedSize] = useState<string>('M');

  const selectSize = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <FastImage
          style={{width: 237, height: 270}}
          source={CheezyPizza}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>

      <View style={styles.productCardContainer}>
        <ScrollView>
          {/* Product Title & Price */}
          <View style={styles.productTitleContainer}>
            <View>
              <Text
                style={{
                  color: colors.SECONDARY,
                  fontWeight: 'bold',
                  fontSize: 22,
                }}>
                Cheezy Pizza
              </Text>
            </View>
            <View>
              <Text style={{color: colors.ACCENT, fontWeight: 'bold'}}>
                Rs.
                <Text style={{fontSize: 22}}>
                  {selectedSize === 'S'
                    ? '1000'
                    : selectedSize === 'M'
                    ? '1500'
                    : '2500'}
                </Text>
              </Text>
            </View>
          </View>
          {/* Size Selection & Rating */}
          <View style={styles.sizeSelectionContainer}>
            <View style={styles.productRatingContainer}>
              <Ionicon name="ios-star-half-sharp" color="#FFE600" size={25} />
              <Text style={{fontSize: 20, color: colors.SECONDARY}}>4.5</Text>
            </View>
            <View style={styles.sizeSelectedContainer}>
              <SizeBtn
                selected={selectedSize === 'S' && true}
                handler={() => {
                  selectSize('S');
                }}
                text="S"
              />
              <SizeBtn
                selected={selectedSize === 'M' && true}
                handler={() => {
                  selectSize('M');
                }}
                text="M"
              />
              <SizeBtn
                selected={selectedSize === 'L' && true}
                handler={() => {
                  selectSize('L');
                }}
                text="L"
              />
            </View>
          </View>
          {/* Product Description */}
          <Text style={styles.productDescription}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </Text>
          {/* Add To Cart Btn */}
          <FormBtn
            handler={() => navigation.navigate(routes.DETAILS)}
            size="lg"
            label="Add to cart"
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default ProductCard;

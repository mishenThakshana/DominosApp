import {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {colors} from 'src/constants';
import styles from 'src/styles/Global.style';

interface PaymentMethodInterface {
  image: any;
  active?: boolean;
  handler?: () => void;
}

const PaymentMethod: FC<PaymentMethodInterface> = ({
  image,
  active,
  handler,
}) => {
  return (
    <TouchableOpacity onPress={handler}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 5,
        }}>
        <View
          style={[
            styles.payementMethod,
            active && {backgroundColor: colors.PRIMARY},
          ]}
        />
        <FastImage
          style={{width: 80, height: 40}}
          source={image}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    </TouchableOpacity>
  );
};

export default PaymentMethod;

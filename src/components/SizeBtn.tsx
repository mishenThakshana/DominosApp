import {FC} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from 'src/constants';
import styles from 'src/styles/Global.style';

interface SizeBtnInterface {
  handler: () => void;
  text: string;
  selected?: boolean;
}

const SizeBtn: FC<SizeBtnInterface> = ({handler, text, selected}) => {
  return (
    <TouchableOpacity onPress={handler}>
      <View style={[styles.sizeBtnContainer, selected && styles.sizeSelected]}>
        <Text
          style={[
            {fontSize: 18, fontWeight: 'bold'},
            selected ? {color: colors.LIGHT} : {color: colors.SECONDARY},
          ]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SizeBtn;

import {FC} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from 'src/constants';
import styles from 'src/styles/Global.style';

interface FormBtnInterface {
  handler?: () => void;
  label: string;
  type?: string;
  size: string;
}

const FormBtn: FC<FormBtnInterface> = ({handler, label, type, size}) => {
  return (
    <TouchableOpacity onPress={handler}>
      <View
        style={[
          size == 'xs'
            ? styles.formBtnContainerExtraSm
            : size == 'sm'
            ? styles.formBtnContainerSm
            : styles.formBtnContainerLg,
          type === 'success'
            ? {backgroundColor: colors.ACCENT}
            : {backgroundColor: colors.PRIMARY},
        ]}>
        <Text style={[size === 'lg' && {fontSize: 16}, {color: colors.LIGHT}]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FormBtn;

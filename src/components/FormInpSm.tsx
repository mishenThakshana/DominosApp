import {FC} from 'react';
import {View, Text, TextInput} from 'react-native';
import {colors} from 'src/constants';
import styles from 'src/styles/Global.style';

interface FormInpSmInterface {
  placeholder: string;
  type?: string;
}

const FormInpSm: FC<FormInpSmInterface> = ({placeholder, type}) => {
  return (
    <View style={styles.textInpSmContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.DARKGRAY}
        style={{color: colors.SECONDARY}}
        keyboardType={type === 'number' ? 'phone-pad' : 'default'}
      />
    </View>
  );
};

export default FormInpSm;

import {FC} from 'react';
import {View, TextInput} from 'react-native';
import {colors} from 'src/constants';
import styles from 'src/styles/Global.style';

interface FormInputInterface {
  placeholder: string;
  type?: string;
}

const FormInput: FC<FormInputInterface> = ({placeholder, type}) => {
  return (
    <View style={styles.textInputContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.DARKGRAY}
        style={{color: colors.SECONDARY}}
        keyboardType={type === 'number' ? 'phone-pad' : 'default'}
      />
    </View>
  );
};

export default FormInput;

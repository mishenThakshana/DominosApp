import {FC} from 'react';
import {View, Text, TextInput} from 'react-native';
import {colors} from 'src/constants';
import styles from 'src/styles/Global.style';

interface FormInputInterface {
  placeholder: string;
}

const FormInput: FC<FormInputInterface> = ({placeholder}) => {
  return (
    <View style={styles.textInputContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.DARKGRAY}
        style={{color: colors.SECONDARY}}
      />
    </View>
  );
};

export default FormInput;

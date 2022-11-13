import {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {colors} from 'src/constants';

interface FormTxtBtnInterface {
  handler?: () => void;
  label: string;
}

const FormTxtBtn: FC<FormTxtBtnInterface> = ({handler, label}) => {
  return (
    <View style={{marginVertical: 10, alignItems: 'center'}}>
      <TouchableOpacity onPress={handler}>
        <Text
          style={{color: colors.SECONDARY, fontWeight: 'bold', fontSize: 16}}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormTxtBtn;

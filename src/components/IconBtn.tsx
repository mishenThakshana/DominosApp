import {FC} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {colors} from 'src/constants';

interface IconBtnInterface {
  icon: string;
  handler: () => void;
}

const IconBtn: FC<IconBtnInterface> = ({icon, handler}) => {
  return (
    <TouchableOpacity onPress={handler}>
      <Ionicon name={icon} size={30} color={colors.SECONDARY} />
    </TouchableOpacity>
  );
};

export default IconBtn;

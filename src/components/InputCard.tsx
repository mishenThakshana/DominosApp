import {FC} from 'react';
import {View, Text} from 'react-native';
import styles from 'src/styles/Global.style';

interface InputCardInterface {
  title: string;
  children?: any;
}

const InputCard: FC<InputCardInterface> = ({title, children}) => {
  return (
    <View style={styles.inputCardContainer}>
      <Text style={styles.inputCardTitle}>{title}</Text>
      {children}
    </View>
  );
};

export default InputCard;

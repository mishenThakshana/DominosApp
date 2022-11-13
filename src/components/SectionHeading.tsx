import {FC} from 'react';
import {View, Text} from 'react-native';
import {colors} from 'src/constants';
import styles from 'src/styles/Global.style';

interface SectionHeadingInterface {
  title: string;
}

const SectionHeading: FC<SectionHeadingInterface> = ({title}) => {
  return (
    <View style={styles.sectionHeadingContainer}>
      <Text style={{fontSize: 24, fontWeight: 'bold', color: colors.SECONDARY}}>
        {title}
      </Text>
    </View>
  );
};

export default SectionHeading;

import {FC} from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {Avatar} from 'src/assets/images';
import {colors} from 'src/constants';
import styles from 'src/styles/Global.style';
import IconBtn from './IconBtn';

interface SingleTopBarInterface {
  navigation: any;
}

const SingleTopBar: FC<SingleTopBarInterface> = ({navigation}) => {
  return (
    <View style={styles.topBarContainer}>
      <View>
        <IconBtn handler={() => navigation.goBack()} icon="ios-arrow-back" />
      </View>
      <View style={styles.avatarContainer}>
        <TouchableOpacity>
          <FastImage
            style={{width: 50, height: 50}}
            source={Avatar}
            resizeMode={FastImage.resizeMode.contain}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingleTopBar;

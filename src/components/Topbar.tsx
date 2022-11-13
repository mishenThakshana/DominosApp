import {FC} from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {Avatar} from 'src/assets/images';
import {colors} from 'src/constants';
import styles from 'src/styles/Global.style';

interface TopbarInterface {
  location: string;
}

const Topbar: FC<TopbarInterface> = ({location}) => {
  return (
    <View style={styles.topBarContainer}>
      <View>
        <Text
          style={{color: colors.SECONDARY, fontSize: 24, fontWeight: 'bold'}}>
          Location
        </Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <Ionicon
            name="ios-location-sharp"
            color={colors.SECONDARY}
            size={22}
          />
          <Text style={{marginLeft: 5, color: colors.SECONDARY, fontSize: 18}}>
            {location}
          </Text>
        </View>
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

export default Topbar;

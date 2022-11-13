import {View, useWindowDimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from 'src/styles/Global.style';
// image
import {Logo} from 'src/assets/images';

const LogoComponent = () => {
  const {height} = useWindowDimensions();
  return (
    <View style={[styles.logoContainer, {height: height * 0.3}]}>
      <FastImage
        style={styles.logo}
        source={Logo}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );
};

export default LogoComponent;

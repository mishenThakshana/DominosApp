import {StyleSheet} from 'react-native';
import {colors} from 'src/constants';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  logoContainer: {
    backgroundColor: colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {width: 180, height: 180},
  inputCardContainer: {
    backgroundColor: colors.LIGHT,
    elevation: 20,
    padding: 20,
    margin: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  inputCardTitle: {
    color: colors.SECONDARY,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  textInputContainer: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: '80%',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  formBtnContainerSm: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 20,
  },
  formBtnContainerLg: {
    padding: 30,
    borderRadius: 20,
  },
});

export default styles;

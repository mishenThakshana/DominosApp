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
  formBtnContainerExtraSm: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  formBtnContainerLg: {
    padding: 30,
    borderRadius: 20,
  },
  topBarContainer: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatarContainer: {
    backgroundColor: colors.LIGHTGRAY,
    padding: 10,
    borderRadius: 100,
  },
  sectionHeadingContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  menuCardContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 20,
    backgroundColor: colors.LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.SECONDARY,
    marginVertical: 10,
  },
  bestCardCardContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: colors.LIGHT,
    borderRadius: 10,
    elevation: 5,
  },
  bestSellingPrice: {
    color: colors.ACCENT,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;

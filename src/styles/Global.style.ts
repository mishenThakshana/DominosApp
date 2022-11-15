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
    marginVertical: 5,
  },
  textInpSmContainer: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingVertical: 5,
    marginVertical: 5,
    marginHorizontal: 6,
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
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
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
  productCardContainer: {
    margin: 20,
    marginHorizontal: 40,
  },
  productTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sizeSelectionContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sizeBtnContainer: {
    padding: 5,
    alignItems: 'center',
    marginHorizontal: 5,
    paddingHorizontal: 18,
  },
  sizeSelected: {
    backgroundColor: colors.PRIMARY,
    borderRadius: 5,
  },
  sizeSelectedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productDescription: {
    color: colors.SECONDARY,
    textAlign: 'justify',
    letterSpacing: 1,
    marginVertical: 20,
  },
  detailsContainer: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  detailTitle: {
    color: colors.SECONDARY,
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  detailTitleContainer: {
    marginHorizontal: 50,
  },
  creditCardInputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  payementMethod: {
    width: 20,
    height: 20,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 100,
    borderWidth: 1,
    marginLeft: 5,
  },
});

export default styles;

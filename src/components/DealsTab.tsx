import {View, ScrollView} from 'react-native';
import FormBtn from './FormBtn';

const DealsTab = () => {
  return (
    <View>
      <ScrollView
        style={{marginHorizontal: 15, marginVertical: 10}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <FormBtn size="xs" label="Spicy" />
        <FormBtn size="xs" label="Devilled" />
        <FormBtn size="xs" label="Cheezy" />
        <FormBtn size="xs" label="Italian" />
        <FormBtn size="xs" label="Mexican" />
      </ScrollView>
    </View>
  );
};

export default DealsTab;

import {useState} from 'react';
import {View, Text} from 'react-native';
import {Visa, MasterCard, Paypal} from 'src/assets/images';
import PaymentMethod from './PaymentMethod';

const PaymentCard = () => {
  const [activeMethod, setActiveMethod] = useState<string>('Visa');

  const handleActiveMethod = (method: string) => setActiveMethod(method);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
      }}>
      <PaymentMethod
        handler={() => handleActiveMethod('Visa')}
        active={activeMethod === 'Visa' && true}
        image={Visa}
      />
      <PaymentMethod
        handler={() => handleActiveMethod('MasterCard')}
        active={activeMethod === 'MasterCard' && true}
        image={MasterCard}
      />
      <PaymentMethod
        handler={() => handleActiveMethod('Paypal')}
        active={activeMethod === 'Paypal' && true}
        image={Paypal}
      />
    </View>
  );
};

export default PaymentCard;

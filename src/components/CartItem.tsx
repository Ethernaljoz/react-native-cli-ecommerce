import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import {AppColors} from '../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';


const CartItem = () => {
  const {width} = useWindowDimensions();
  return (
    <View style={styles.cartWrapper}>
      <View
        style={[
          {width: width / 3.8, height: width / 4},
          styles.cartImageWrapper,
        ]}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/imageexample.png')}
        />
      </View>

      <View style={styles.cartHeader}>
        <View style={styles.cartHeaderTitle}>
          <Text style={styles.cartTitle}>Macbook Pro M4 Macbook </Text>
          <TouchableOpacity>
            <Ionicons name="close" size={28} color={AppColors.textColor} />
          </TouchableOpacity>
        </View>

        <View>
        <View style={styles.cartContent}>
          <Text style={styles.cartPrice}>$ 150</Text>
          <View style={styles.actionWrapper}>
            <TouchableOpacity>
              <View style={styles.IconWrapper}>
                <Ionicons name="remove" size={28} color={AppColors.mainColor} />
              </View>
            </TouchableOpacity>
            <Text style={styles.cartPrice}>50</Text>
            <TouchableOpacity>
              <View style={styles.IconWrapper}>
                <Ionicons name="add" size={28} color={AppColors.mainColor} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        </View>


      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartWrapper: {
    width:'100%',
    flexDirection: 'row',
    gap: 20,
    justifyContent:'space-between',
    marginBottom: 15,
    paddingBottom: 10,
  },
  cartImageWrapper: {
    backgroundColor: AppColors.textColor,
    borderRadius: 10,
    overflow:'hidden',

  },
  imageStyle: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cartContent: {
      flexDirection:'row',
      gap:20,
    alignItems: 'center',
  },
  cartHeader: {
    flexDirection: 'column',
    justifyContent:'space-between',
  },
  cartHeaderTitle: {
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  cartTitle: {
    fontSize: 16,
    fontWeight: 'medium',
    color: AppColors.textColor,
  },
  cartPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: AppColors.textColor,
  },
  actionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  IconWrapper: {
    position: 'relative',
    borderWidth: 2,
    borderColor: AppColors.mainColor,
    padding: 7,
    borderRadius: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

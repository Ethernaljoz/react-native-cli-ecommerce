import {Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppColors} from '../../theme/colors';
import CartItem from '../../components/CartItem';

const CartScreen = () => {
  return (
    <ScreenWrapper>
      <View style={styles.homeTopBar}>
        <View style={styles.homeIconWrapper}>
          <Ionicons name="chevron-back" size={28} />
        </View>
        <Text style={styles.homeLabel}>Cart</Text>
        <TouchableOpacity>
          <View style={styles.homeIconWrapper}>
            <Ionicons name="ellipsis-horizontal" size={28} />
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <CartItem />
      </View>

      <View style={styles.chechoutWrapper}>
        <Text>checkout</Text>
        <Pressable style={styles.pressableStyle} onPress={() => {}}>
                  <Text style={styles.pressableText}>checkout</Text>
        </Pressable>
        </View>
    </ScreenWrapper>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  homeTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeLabel: {
    fontSize: 30,
    color: AppColors.textColor,
  },
  homeIconWrapper: {
    position: 'relative',
    backgroundColor: AppColors.textColor,
    padding: 10,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chechoutWrapper: {
    position: 'absolute',
    backgroundColor: AppColors.backgroundColor,
    // padding: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    // justifyContent:'flex-end',
    // alignItems:'flex-start',
    width:'100%',
    borderTopWidth:1,
    borderTopColor: AppColors.textColor,
    // marginHorizontal:20,
    bottom:20,
    // right:0,
  },
  pressableStyle: {
    width: '100%',
    height: 60,
    backgroundColor: AppColors.mainColor,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  pressableText: {
    color: AppColors.textColor,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

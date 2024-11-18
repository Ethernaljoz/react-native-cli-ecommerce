import {FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppColors} from '../../theme/colors';
import CartItem from '../../components/CartItem';

const CartScreen = () => {
const tab = [1,2,3,4,5,6,7];
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

      <View style={{flex:1}}>
        <View style={{flex:0.8}}>

        <FlatList
        data={tab}
        renderItem={({item})=> <CartItem />}
        keyExtractor={(item)=> item.toString()}
        showsVerticalScrollIndicator={false}
        />
        </View>


      <View style={styles.chechoutWrapper}>
        <Text>checkout</Text>
        <Pressable style={styles.pressableStyle} onPress={() => {}}>
                  <Text style={styles.pressableText}>checkout</Text>
        </Pressable>
        </View>

      </View>

    </ScreenWrapper>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  homeTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom:10,
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
    backgroundColor: AppColors.backgroundColor,
    padding: 10,
    flex:0.2,
    borderTopWidth:2,
    borderTopColor: AppColors.textColor,
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

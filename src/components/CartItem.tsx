import { Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import React from 'react';
import { AppColors } from '../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import imagess from '../assets/'
const CartItem = () => {
    const { width } = useWindowDimensions();
  return (
    <View style={styles.cartWrapper}>
        <View style={[{width:width / 3 , height:width / 3  },styles.cartImageWrapper]}>
            <Image style={styles.imageStyle} source={require('../assets/imageexample.png')} />
        </View>
        <View >
            <View>
                <Text style={styles.cartTitle}>Macbook Pro M4</Text>
                <TouchableOpacity>
                    <Ionicons name="close" size={28} color={AppColors.textColor} />
                </TouchableOpacity>
            </View>
            <View style={styles.cartContent}>
                <Text style={styles.cartPrice}>$ 150</Text>
                <View  style={styles.actionWrapper}>
                     <TouchableOpacity>
                              <View style={styles.IconWrapper}>
                                <Ionicons name="add" size={28} />
                              </View>
                    </TouchableOpacity>
                <Text style={styles.cartPrice} >5</Text>
                     <TouchableOpacity>
                              <View style={styles.IconWrapper}>
                                <Ionicons name="remove" size={28} />
                              </View>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
    cartWrapper:{
        flexDirection:'row',
        gap:5,
        marginBottom:15,
    },
    cartImageWrapper:{
        backgroundColor:AppColors.textColor,
        borderRadius:15,
    },
    imageStyle:{
        width:'100%',
        height:'100%',
        objectFit:'cover',
        borderRadius:15,
       },
    cartContent:{
        flexDirection:'row',
        justifyContent:'space-between',
       },
    cartTitle:{
        fontSize:16,
        fontWeight:'medium',
        color:AppColors.textColor,
       },
    cartPrice:{
        fontSize:18,
        fontWeight:'bold',
        color:AppColors.textColor,
       },
       actionWrapper: {
        flexDirection:'row',
        gap: 20,
        alignItems: 'center',
      },
       IconWrapper: {
        position: 'relative',
        backgroundColor: AppColors.textColor,
        padding: 10,
        borderRadius: '25%',
        justifyContent: 'center',
        alignItems: 'center',
      },
});

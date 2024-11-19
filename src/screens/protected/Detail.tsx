import { Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppColors } from '../../theme/colors';

const DetailScreen = () => {
    const {width} = useWindowDimensions();
  return (
    <View style={styles.detailScreen}>
              <View style={styles.detailTopBar}>
                <TouchableOpacity>
                <View style={styles.detailIconWrapper}>
                  <Ionicons name="chevron-back" size={28} />
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.detailIconWrapper}>
                    <Ionicons name="heart" size={28} color={AppColors.mainColor} />
                  </View>
                </TouchableOpacity>
              </View>

    <View style={{}}>
      <View
              style={styles.cartImageWrapper}>
              <Image
                style={styles.imageStyle}
                source={require('../../assets/imageexample.png')}
              />
            </View>
      <View
              style={styles.cardWrapper}>
              {/* <Image
                style={styles.imageStyle}
                source={require('../assets/imageexample.png')}
              /> */}
            </View>
    </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  detailScreen:{
    backgroundColor:AppColors.backgroundColor,
  },
      detailTopBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical:10,
        paddingHorizontal:15,
      },

      detailIconWrapper: {
        position: 'relative',
        backgroundColor: AppColors.textColor,
        padding: 10,
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      cartImageWrapper: {
        backgroundColor: AppColors.backgroundColor,
        paddingBottom:15,
        width:'100%',
        height:400,
        overflow:'hidden',
      },
      imageStyle: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
      cardWrapper: {
        // backgroundColor: AppColors.textColor,
        width:'100%',
        height:400,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor:AppColors.backgroundColor,
         marginTop: -30,
      },
});

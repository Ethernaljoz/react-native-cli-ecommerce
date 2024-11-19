import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import React from 'react';
import { AppColors } from '../theme/colors';


const ProductItem = () => {
    const { width } = useWindowDimensions();
  return (
    <View style={styles.productWrapper}>
        <View style={[{width:width / 2.4 , height:width / 2.5  },styles.productImageWrapper]}>
            <Image style={styles.imageStyle} source={require('../assets/imageexample.png')} />
        </View>
        <View >
            <Text style={styles.productTitle}>Macbook Pro M4</Text>
            <View style={styles.productContent}>
                <Text style={styles.productPrice}>$ 150</Text>
                <Text style={styles.productTitle} >⭐ 4.5</Text>
            </View>

        </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
    productWrapper:{
        flexDirection:'column',
        gap:5,
        marginBottom:15,
    },
    productImageWrapper:{
        backgroundColor:AppColors.textColor,
        borderRadius:15,
        overflow:'hidden',
    },
    imageStyle:{
        width:'100%',
        height:'100%',
        objectFit:'cover',
       },
    productContent:{
        flexDirection:'row',
        justifyContent:'space-between',
       },
    productTitle:{
        fontSize:16,
        fontWeight:'medium',
        color:AppColors.textColor,
       },
    productPrice:{
        fontSize:18,
        fontWeight:'bold',
        color:AppColors.textColor,
       },
});

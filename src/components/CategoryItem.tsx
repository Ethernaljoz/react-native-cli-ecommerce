import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { AppColors } from '../theme/colors';

type categoryProps={
    item: string,
    selectCategory: string,
    setSelectCategory:(item:string)=> void
}

const CategoryItem = ({item, selectCategory, setSelectCategory}:categoryProps) => {
  return (
    <TouchableOpacity onPress={()=> setSelectCategory(item)}>
      <View style={[styles.categoriesInactive, selectCategory === item && {backgroundColor:AppColors.mainColor}]}>
        <Text style={[styles.categoriesInactiveText,  selectCategory === item && {color:AppColors.textColor}]}>{item}</Text>
    </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
      categoriesInactive:{
          paddingHorizontal:20,
          paddingVertical:10,
          borderRadius: 10,
          marginRight:20,
          borderWidth:2,
          borderColor:AppColors.mainColor,
        },
        categoriesInactiveText:{
            fontSize:16,
            color:AppColors.mainColor,
            fontWeight:'bold',
        },
});

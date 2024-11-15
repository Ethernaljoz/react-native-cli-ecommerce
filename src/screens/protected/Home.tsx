import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScreenWrapper from '../../components/ScreenWrapper';
import { AppColors } from '../../theme/colors';
import CustomTextInput from '../../components/CustomTextInput';



const HomeScreen = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <ScreenWrapper>
      {/* top bar */}
      <View style={styles.homeTopBar}>
        <Text style={styles.homeLabel}>Discover</Text>
        <View style={styles.homeIconWrapper}>
          <Ionicons name="bag-handle-outline" size={28} />
          <View style={styles.cartBadge}>
            <Text style={styles.badgeText} >0</Text>
          </View>
        </View>
      </View>

      {/* search section */}
      <View style={styles.inputWrapper} >
        <CustomTextInput
        value={inputValue}
        placeholder="Search"
        onChangeText={setInputValue}
         />
        <View style={styles.inputSearchIcon}>
        <Ionicons name="search-outline" size={32} color={AppColors.textColor} />
       </View>
      </View>

       {/* Card section*/}
       <View style={styles.cardWrapper }  >  </View>

      {/* Categories section*/}
      <View style={styles.categoriesWrapper}>
        <View style={styles.categoriesHeader}>
          <Text style={styles.categoriesTitleOne}>Categories</Text>
          <TouchableOpacity>
          <Text style={styles.categoriesTitleTwo}>See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.categoriesContent}><Text style={styles.categoriesContentText}>All</Text></View>
          <View style={styles.categoriesContentOutline}><Text style={styles.categoriesContentTextOutline}>Smartphones</Text></View>
          <View style={styles.categoriesContentOutline}><Text style={styles.categoriesContentTextOutline}>Headphones</Text></View>
          <View style={styles.categoriesContentOutline}><Text style={styles.categoriesContentTextOutline}>Laptops</Text></View>
        </ScrollView>
      </View>

    </ScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeTopBar:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  homeLabel:{
    fontSize:30,
    color:AppColors.textColor,
  },
  homeIconWrapper:{
    position:'relative',
    backgroundColor:AppColors.textColor,
    padding:10,
    borderRadius:'50%',
    justifyContent:'center',
    alignItems:'center',
  },
  cartBadge:{
    position:'absolute',
    borderRadius:'50%',
    top: '-30%',
    right: '-30%',
    left:'98%',
    bottom: '98%',
    backgroundColor: AppColors.mainColor,
    justifyContent: 'center',
  },
  badgeText:{
    color:AppColors.textColor,
    textAlign:'center',
    padding:3,
  },
  inputWrapper:{
    position:'relative',
    marginTop:30,
  },
  inputSearchIcon:{
    position:'absolute',
    right:'3%',
    top:'20%',
  },
  cardWrapper:{
    width:'100%',
    height:180,
    marginTop:30,
    marginBottom:25,
    borderRadius:20,
    borderWidth: 2,
    borderColor: AppColors.textColor,
    backgroundColor: AppColors.mainColor,
  },
  categoriesWrapper:{
    flexDirection:'column',
  },
  categoriesHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:10,
  },
  categoriesTitleOne:{
    fontSize:22,
    fontWeight:'medium',
    color:AppColors.textColor,
  },
  categoriesTitleTwo:{
    fontSize:16,
    color:AppColors.mainColor,
  },
  categoriesContent:{
    paddingHorizontal:20,
    paddingVertical:10,
    backgroundColor:AppColors.mainColor,
    borderRadius: 10,
    marginRight:20,
  },
  categoriesContentText:{
    fontSize:16,
    color:AppColors.textColor,
    fontWeight:'bold',
  },
  categoriesContentOutline:{
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius: 10,
    marginRight:20,
    borderWidth:2,
    borderColor:AppColors.mainColor,
  },
  categoriesContentTextOutline:{
    fontSize:16,
    color:AppColors.mainColor,
    fontWeight:'bold',
  },
});

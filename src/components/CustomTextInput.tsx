import { KeyboardTypeOptions, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { AppColors } from '../theme/colors';

type InputProps = {
    onChangeText : (text: string) => void,
    value: string,
    placeholder: string,
   keyboardType?:  KeyboardTypeOptions
   onBlur? : ()=> void,
   onFocus?: ()=> void,
   secureTextEntry?: boolean
}

const CustomTextInput = (props:InputProps) => {
    const [inputFocusColor, setInputFocusColor] = useState(AppColors.textColor);
    const customFocus = ()=>{
        props?.onBlur;
        setInputFocusColor(AppColors.mainColor);
    };

    const customBlur = ()=>{
        props?.onBlur;
        setInputFocusColor(AppColors.textColor);

    };
  return (
    <TextInput
    {...props}
    placeholderTextColor={AppColors.textColor}
    onBlur={customBlur}
    onFocus={customFocus}
    style= {[{borderColor: inputFocusColor},styles.inputStyle]}
    />
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
    inputStyle:{
        width:'100%',
        height: 60,
        borderWidth: 2,
        padding:10,
        borderRadius:10,
        color: AppColors.textColor,
        fontSize:16,
      },
});

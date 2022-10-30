import React, {useEffect, useState} from 'react';
import {StyleSheet, Pressable} from 'react-native';
import Colors from '../constants/Colors';
import Icons, {icons} from './Icons';

const tabIcons = [
  {
    ico1: 'home',
    ico2: 'home-outline',
    type: icons.Ionicons,
  },
  {ico1: 'like1', ico2: 'like2', type: icons.AntDesign},
  {ico1: 'plus', ico2: 'plus', type: icons.Entypo},
  {
    ico1: 'chatbox-ellipses',
    ico2: 'chatbox-ellipses-outline',
    type: icons.Ionicons,
  },
  {ico1: 'user', ico2: 'user-o', type: icons.FontAwesome},
];

const BottomTab = () => {
  return (
    <>
      {tabIcons.map((item, index) => (
        <Pressable key={index} style={[index === 2 && styles.plusIconStyle]}>
          <Icons
            icon={item.type}
            name={item.ico2}
            color={index === 2 && Colors.white}
            size={index === 2 && 34}
          />
        </Pressable>
      ))}
    </>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  plusIconStyle: {
    bottom: 24,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.6,
    elevation: 8,
    borderWidth: 4,
    borderColor: Colors.white,
  },
});

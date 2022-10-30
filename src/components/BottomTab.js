import React, {useEffect, useRef} from 'react';
import {StyleSheet, Pressable, Animated} from 'react-native';
import {Surface} from 'react-native-paper';
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
const CONTAINER_HEIGHT = 50;

const BottomTab = ({scrollY}) => {
  const offsetAnim = useRef(new Animated.Value(0)).current;

  const clampedScroll = Animated.diffClamp(
    Animated.add(
      scrollY.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolateLeft: 'clamp',
      }),
      offsetAnim,
    ),
    0,
    CONTAINER_HEIGHT,
  );
  let _clampedScrollValue = 0;
  let _offsetValue = 0;
  let _scrollValue = 0;
  let scrollEndTimer = null;
  useEffect(() => {
    offsetAnim.addListener(({value}) => {
      _offsetValue = value;
    });
    scrollY.addListener(({value}) => {
      const diff = value - _scrollValue;
      _scrollValue = value;
      _clampedScrollValue = Math.min(
        Math.max(_clampedScrollValue + diff, 0),
        CONTAINER_HEIGHT,
      );
      clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(() => {
        const toValue =
          _scrollValue > CONTAINER_HEIGHT &&
          _clampedScrollValue > CONTAINER_HEIGHT / 2
            ? _offsetValue + CONTAINER_HEIGHT
            : _offsetValue - CONTAINER_HEIGHT;
        Animated.timing(offsetAnim, {
          toValue,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, 250);
    });
  }, []);

  onMomentumScrollEnd = () => {};
  onScrollEndDrag = () => {};

  const bottomTabTranslate = clampedScroll.interpolate({
    inputRange: [0, CONTAINER_HEIGHT],
    outputRange: [0, CONTAINER_HEIGHT * 2],
    extrapolate: 'clamp',
  });
  return (
    <Animated.View
      style={[
        styles.view,
        {bottom: 0, transform: [{translateY: bottomTabTranslate}]},
      ]}>
      <Surface style={[styles.rowContainer, styles.bottomBar]}>
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
      </Surface>
    </Animated.View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: CONTAINER_HEIGHT,
  },
  bottomBar: {
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    marginHorizontal: 4,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
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

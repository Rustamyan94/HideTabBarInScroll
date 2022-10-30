import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {useRef} from 'react';
import {data} from '../constants/raw';
import BottomTab from '../components/BottomTab';
import FlasListRenderItem from '../components/FlasListRenderItem';

const HomePage = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <Animated.FlatList
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        data={data}
        keyExtractor={(item, index) => item.title + index.toString()}
        renderItem={({item}) => <FlasListRenderItem item={item} />}
        contentContainerStyle={styles.contentContainerStyle}
        scrollEventThrottle={1}
      />

      <BottomTab scrollY={scrollY} />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingTop: 50,
    marginTop: 8,
  },
});

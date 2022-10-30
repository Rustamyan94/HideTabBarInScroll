import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Surface} from 'react-native-paper';
import Icons, {icons} from './Icons';
import Colors from '../constants/Colors';

const FlasListRenderItem = ({item}) => {
  return (
    <Surface style={styles.item}>
      <View style={styles.content}>
        <View id={`item.${item.avatar}.avatar`}>
          <Image
            style={styles.avatar}
            source={{uri: item.avatar}}
            resizeMode="cover"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.caption}>{item.caption}</Text>
        </View>
        <View style={{position: 'absolute', top: 16, right: 0}}>
          <Icons icon={icons.Entypo} name="dots-three-vertical" size={18} />
        </View>
      </View>
      <Pressable>
        <View id={`item.${item.image}.image`}>
          <View>
            <Image
              style={styles.image}
              source={{uri: item.image}}
              resizeMode="cover"
            />
          </View>
        </View>
      </Pressable>
      <View style={styles.bottomView}>
        <View style={styles.icon}>
          <Icons icon={icons.AntDesign} name="heart" color={Colors.primary} />
        </View>
        <View style={styles.icon}>
          <Icons icon={icons.Ionicons} name="chatbubble-outline" />
        </View>
        <View style={styles.icon}>
          <Icons icon={icons.Feather} name="send" />
        </View>
      </View>
    </Surface>
  );
};

export default FlasListRenderItem;

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 10,
    marginBottom: 12,
    elevation: 6,
    borderRadius: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  caption: {
    color: Colors.darkGray,
  },
  image: {
    height: 300,
    width: null,
    marginBottom: 1,
    marginHorizontal: 16,
    borderRadius: 16,
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 16,
    paddingVertical: 8,
  },
  textContainer: {
    marginHorizontal: 16,
  },
  avatar: {
    height: 35,
    width: 35,
    borderRadius: 20,
    backgroundColor: Colors.primary,
  },
  rowView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  bottomView: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
  },
  icon: {
    marginHorizontal: 10,
  },
});

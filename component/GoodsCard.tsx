import React from 'react';
import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Card} from '@rneui/themed';

type Goods = {
  name: string;
  image: string;
  price: number;
  description: string;
};

const GoodsCard = () => {
  const items: Goods[] = [
    {
      name: 'test',
      image:
        'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
      price: 9999999,
      description:
        'This is a test descriptionqweqweqweqweeweqweqweqweqweqwewqeqewqweqwe',
    },
    {
      name: 'test2',
      image:
        'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
      price: 1,
      description: 'This is a test description2',
    },
    {
      name: 'test3',
      image:
        'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
      price: 100,
      description: 'This is a test description3',
    },
    {
      name: 'test4',
      image:
        'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
      price: 200,
      description:
        'This is a test description4qweqweq  r erwuheiuwgcrhlewcghjkbkjnhbkhbjghjbgvfhggjhbvgfhjhbgvfhhjgb',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        {items.map((item, index) => (
          <View key={index} style={styles.cardContainer}>
            <TouchableOpacity onPress={() => console.log('Press')}>
              <Card containerStyle={styles.card}>
                <Card.Title>{item.name}</Card.Title>
                <Card.Divider />
                <Card.Image
                  style={styles.image}
                  source={{
                    uri: item.image,
                  }}
                  resizeMode="cover"
                />
                <Text style={{marginBottom: 10}}>{item.description}</Text>
              </Card>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  cardContainer: {
    width: '55%', // 占用接近一半的宽度
    marginBottom: 0,
    marginHorizontal: -12,
  },
  card: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 150, // 可以根据需要调整高度
  },
});

export default GoodsCard;

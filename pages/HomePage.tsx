import React from 'react';
import GoodsCard from '../component/GoodsCard.tsx';
import ISearchBar from '../component/ISearchBar.tsx';
import {GoodProps} from '../component/TypeDefinations.tsx';

const items: GoodProps[] = [
  {
    id: '1',
    name: 'test',
    image: 'https://pic1.zhimg.com/v2-119565438456235a942996a574800eb8_b.jpg',
    price: 9999999,
    description:
      'This is a test descriptionqweqweqweqweeweqweqweqweqweqwewqeqewqweqwe',
    user: {
      name: 'brynn',
      avatar:
        'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
    },
  },
  {
    id: '2',
    name: 'test2',
    image: 'https://picx.zhimg.com/v2-0bdd648c59f9ab3fb91c54933f7b0c21_b.jpg',
    price: 1,
    description: 'This is a test description2',
    user: {
      name: 'brynn',
      avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
    },
  },
  {
    id: '3',
    name: 'test3',
    image: 'https://pic4.zhimg.com/v2-21ac80bdc1a514bd4cd56e880cc55d79_b.jpg',
    price: 100,
    description: 'This is a test description3',
    user: {
      name: 'brynn',
      avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
    },
  },
  {
    id: '4',
    name: 'test4',
    image:
      'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
    price: 200,
    description: 'This is a test',
    user: {
      name: 'brynn',
      avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
    },
  },
  {
    id: '5',
    name: 'test4',
    image:
      'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
    price: 200,
    description:
      'This is a test description4qweqweq  r erwuheiuwgcrhlewcghjkbkjnhbkhbjghjbgvfhggjhbvgfhjhbgvfhhjgb',
    user: {
      name: 'brynn',
      avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
    },
  },
  {
    id: '6',
    name: 'test4',
    image:
      'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
    price: 200,
    description:
      'This is a test description4qweqweq  r erwuheiuwgcrhlewcghjkbkjnhbkhbjghjbgvfhggjhbvgfhjhbgvfhhjgb',
    user: {
      name: 'brynn',
      avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
    },
  },
  {
    id: '7',
    name: 'test4',
    image:
      'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
    price: 200,
    description:
      'This is a test description4qweqweq  r erwuheiuwgcrhlewcghjkbkjnhbkhbjghjbgvfhggjhbvgfhjhbgvfhhjgb',
    user: {
      name: 'brynn',
      avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
    },
  },
  {
    id: '8',
    name: 'test4',
    image:
      'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
    price: 200,
    description:
      'This is a test description4qweqweq  r erwuheiuwgcrhlewcghjkbkjnhbkhbjghjbgvfhggjhbvgfhjhbgvfhhjgb',
    user: {
      name: 'brynn',
      avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
    },
  },
  {
    id: '9',
    name: 'test4',
    image:
      'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
    price: 200,
    description:
      'This is a test description4qweqweq  r erwuheiuwgcrhlewcghjkbkjnhbkhbjghjbgvfhggjhbvgfhjhbgvfhhjgb',
    user: {
      name: 'brynn',
      avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
    },
  },
  {
    id: '10',
    name: 'test4',
    image:
      'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
    price: 200,
    description:
      'This is a test description4qweqweq  r erwuheiuwgcrhlewcghjkbkjnhbkhbjghjbgvfhggjhbvgfhjhbgvfhhjgb',
    user: {
      name: 'brynn',
      avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
    },
  },
  {
    id: '11',
    name: 'test4',
    image:
      'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
    price: 200,
    description:
      'This is a test description4qweqweq  r erwuheiuwgcrhlewcghjkbkjnhbkhbjghjbgvfhggjhbvgfhjhbgvfhhjgb',
    user: {
      name: 'brynn',
      avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
    },
  },
];

function HomePage() {
  return (
    <>
      <ISearchBar />
      <GoodsCard data={items} />
    </>
  );
}

export default HomePage;

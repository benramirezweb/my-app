
import { View, Text } from 'react-native'
import React from 'react'

export default function Objectentries() {
  const products = [
    { id: 1, name: 'Apple', categoryId: 10, stock: 5 },
    { id: 2, name: 'Banana', categoryId: 10, stock: 2 },
    { id: 3, name: 'Tomato', categoryId: 20, stock: 8 },
    { id: 4, name: 'Cucumber', categoryId: 20, stock: 3 },
    { id: 5, name: 'Milk', categoryId: 30, stock: 4 },
  ];

  const categories = [
    { id: 10, name: 'Fruits' },
    { id: 20, name: 'Vegetables' },
    { id: 30, name: 'Dairy' },
  ];

  const blacklistIds = [2, 5];

  const result = categories.reduce((acc, current)=>{
    const {name, id} = current;
    if (!acc[name]) {
      acc[name] = {
        totalStock: 0,
        items: [],
      }
    };
    acc[name].items = products.filter(p=>p.categoryId === id);
    acc[name].totalStock = products.filter(p=>p.categoryId===id).map(p=>p.stock).reduce((a, c)=>(a+c), 0);
    return acc;
  },{});

  console.log('RESULT', result.Dairy);

  return (
    <View>
      <Text>objectentries</Text>
    </View>
  )
}
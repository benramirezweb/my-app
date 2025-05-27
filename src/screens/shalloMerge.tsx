import { View, Text } from 'react-native'
import React from 'react'
import cloneDeep from 'lodash/cloneDeep';
import merge from 'lodash/merge';

export default function ShalloMerge() {
  // const user = { name: 'Juan', address: { city: 'CDMX' } };
  // esto es un shallow copy copia superficial, hace una copia de user pero address no esta copiado sigue apuntando a la misma referencia
  // const userCopy = {...user};
  // userCopy.address.city = 'Prueba city';
  // const deepClone = cloneDeep(user);
  // deepClone.name = 'TEST name';
  // deepClone.address.city = 'TEST city';

  // const base = { name: 'Juan', age: 30 };
  // const override = { age: 31, city: 'CDMX' };
  // // esta es una shallow merge, merge superficial, igual fusiona pero solo en el nivel superior
  // const shallowMerge = {...base, ...override};
  // console.log('deepClone');
  // console.log(deepClone);
  // console.log('deepClone');
  // console.log('shallowMerge');
  // console.log(shallowMerge);
  // console.log('shallowMerge');

  // console.log('user');
  // console.log(user);
  // console.log('user');
  // console.log('userCopy');
  // console.log(userCopy.address);
  // console.log('userCopy');
  // const obj1 = { user: { name: 'Juan', age: 30 } };
  // const obj2 = { user: { city: 'CDMX' } };

  // const merged = merge({}, obj1, obj2);

  // console.log('merge--');
  // console.log(merged);
  // console.log('merge--');

  // const test = {
  //   name: 'Dan',
  //   card: {
  //     id: 323,
  //     lastName: 'Lopez',
  //     medicalCard: {
  //       number: 6456
  //     }
  //   }
  // }
  // const original = [1, 2, { name: 'Dan' }];
  // const copy = [...original];

  // copy[2].name= 'YA CAMBIO la original';

  const arr3 = [{ id: 1 }];
  const merged = [...arr3];

  merged[0].id = 42342343;

  console.log('original');
  console.log(arr3);
  console.log('original');
  return (
    <View>
      <Text>shalloMerge</Text>
    </View>
  )
}
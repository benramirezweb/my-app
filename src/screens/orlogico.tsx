import { View, Text } from 'react-native'
import React from 'react'

export default function ORLOGICO() {
  // OR LOGIC ------> ||
  // VALOR POR DEFECTO CUANDO EL PRIMER VALOR ES ALGUN TRUTHY
  // APLICA CON / NULL / UNDEFINED / 0 / '' / FALSE
  let test;
  console.log(test || 'no hay nada---> UNDEFINED POR NO ASIN¿GNAR VALOR');
  test = null;
  console.log(test || 'no hay nada----> NULL');
  test = undefined;
  console.log(test || 'no hay nada----> UNDEFINED');
  test = 0;
  console.log(test || 'no hay nada----> 0');
  test = '';
  console.log(test || 'no hay nada-----> STRING VACÍO');
  test = false;
  console.log(test || 'no hay nada-----> FALSE');

  test = 'null';
  console.log(test || 'no hay nada----> NULL');
  test = 1;
  console.log(test || 'no hay nada----> UNDEFINED');
  test = true;
  console.log(test || 'no hay nada----> 0');
  test = -1;
  console.log(test || 'no hay nada-----> STRING VACÍO');
  test = ()=>{};
  console.log(test || 'no hay nada-----> FALSE');
  test = new Date();
  console.log(test || 'no hay nada-----> FALSE');

  // AND LOGIC ------> &&
  // SOLO EJECUTA EL SEGUDO VALOR CUANDO EL PRIMERO ES UN TRUTHY
  // APLICA PARA / NULL / UNDEFINED / 0 / '' / FALSE

  let test2;
  console.log(test2 && 'NO HAY NADA---> UNDEFINED POR NO ASIGNAR VALOR');

  test2 = 0;
  console.log(test2 && 'NO HAY NADA----> 0');

  test2 = '';
  console.log(test2 && 'NO HAY NADA-----> STRING VACÍO');

  test2 = false;
  console.log(test2 && 'NO HAY NADA---> FALSE');

  test2 = undefined;
  console.log(test2 && 'NO HAY NADA----> UNDEFINED ASIGNADO');

  test2 = null;
  console.log(test2 && 'NO HAY NADA ----> NULL');

  test2 = NaN;
  console.log(test2 && 'NO HAY NADA----> NAN');

  test2 = 'hola';
  console.log(test2 && 'SI HAY ALGO --> texto');

  test2 = true;
  console.log(test2 && 'SI HAY ALGO ---> true');

  test2 = [];
  console.log(test2 && 'SI HAY ALGO---> Array');

  test2 = {};
  console.log(test2 && 'SI HAY ALGO---> Objeto');

  test2 = 1;
  console.log(test2 && 'SI HAY ALGO---> numero diferente a cero ');

  test2 = ()=>{};
  console.log(test2 && 'SI HAY ALGO---> una funcion');

  test2 = new Date();
  console.log(test2 && 'SI HAY ALGO---- new date()');

  // NULLISH COALESING OPERATOR ??
  // ES COMO || PERO SOLO DISCRIMINA NULL Y UNDEFINED

  let test3;
  console.log(test3 ?? 'DEBE MOSTRAR ESTO PORQUE EL PRIMER VALOR ES UNDEFINED');

  test3 = null
  console.log(test3 ?? 'DEBE MOSTRAR ESTO PORQUE EL PRIMER VALOR ES NULL');

  test3 = ''
  console.log(test3 ?? 'DEBE MOSTRAR ESTO PORQUE EL PRIMER VALOR ES ');

  test3 = 0
  console.log(test3 ?? 'DEBE MOSTRAR ESTO PORQUE EL PRIMER VALOR ES ');

  test3 = false
  console.log(test3 ?? 'DEBE MOSTRAR ESTO PORQUE EL PRIMER VALOR ES ');

  // TERNARIO

  let test4;

  console.log(test4 ? '' : 'OPCION 2 - Muestre esto porque test4 es undefined');

  test4 = undefined;
  console.log(test4 ? '' : 'OPCION 2 - Muestre esto porque test4 es undefined');

  test4 = null;
  console.log(test4 ? '' : 'OPCION 2 - Muestre esto porque test4 es null');

  test4 = false;
  console.log(test4 ? '' : 'OPCION 2 - Muestre esto porque test4 es false');

  test4 = 0;
  console.log(test4 ? '' : 'OPCION 2 - Muestre esto porque test4 es 0');

  test4 = '';
  console.log(test4 ? '' : 'OPCION 2 - Muestre esto porque test4 es string vacio');

  test4 = [];
  console.log(test4 ? 'OPCION 1 - Muestre esto porque test4 es []' : '');

  test4 = {};
  console.log(test4 ? 'OPCION 1 - Muestre esto porque test4 es []' : '');

  test4 = 'ok';
  console.log(test4 ? 'OPCION 1 - Muestre esto porque test4 es ok' : '');

  test4 = 1;
  console.log(test4 ? 'OPCION 1 - Muestre esto porque test4 es 1' : '');

  test4 = ()=>{};
  console.log(test4 ? 'OPCION 1 - Muestre esto porque test4 es ()=>{}' : '');

  test4 = ()=>null;
  console.log(test4() ? '' : 'OPCION 2 - Muestre esto porque test4 es ()=>null');

  test4 = new Date();
  console.log(test4 ? 'OPCION 1 - Muestre esto porque test4 es newDate()' : '');

  let test5 = null;
  test5 &&= 'ESTE ES EL NUEVO VALOR';
  console.log(test5);

  
  return (
    <View>
      <Text>ORLOGICO</Text>
    </View>
  )
}
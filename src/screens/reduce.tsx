import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

type productsType = {
  name: string;
  price: number;
  discount: number;
};

type usersType = {
  active: number;
  inactive: number;
};

type categoriesType = {
  Ropa: Number;
  Calzado: Number;
  Accesorios: Number;
}


export default function Reduce() {
  const [productos, setProductos] = useState<productsType[]>([]);
  const [sumaPrecios, setSumaPrecios] = useState<number>(0);
  const [categories, setCategories] = useState<categoriesType>({Ropa: 0, Calzado: 0, Accesorios: 0})
  const [productosConDescuento, setProductosConDescuento] = useState<number>(0);
  const [sumaPreciosConDescuento, setSumaPreciosConDescuento] = useState<number>(0);
    const [activeUsers, setActiveUsers] = useState<usersType>({inactive:0, active: 0});
  const products = [
  { name: 'Camisa', price: 100, discount: 10 },
  { name: 'Pantalón', price: 200, discount: 15 },
  { name: 'Zapatos', price: 300, discount: 0 },
];

const users = [
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: true },
];

type Category = 'Ropa' | 'Calzado' | 'Accesorios';


const items = [
  { name: 'Camisa', category: 'Ropa' },
  { name: 'Zapatos', category: 'Calzado' },
  { name: 'Pantalón', category: 'Ropa' },
  { name: 'Gorra', category: 'Accesorios' },
  { name: 'Sudadera', category: 'Ropa' },
  { name: 'Botas', category: 'Calzado' },
  { name: 'Bufanda', category: 'Accesorios' },
  { name: 'Chamarra', category: 'Ropa' },
  { name: 'Sandalias', category: 'Calzado' },
  { name: 'Cinturón', category: 'Accesorios' },
  { name: 'Playera', category: 'Ropa' },
  { name: 'Zapatillas', category: 'Calzado' },
  { name: 'Guantes', category: 'Accesorios' },
  { name: 'Blusa', category: 'Ropa' },
  { name: 'Mocasines', category: 'Calzado' },
  { name: 'Sombrero', category: 'Accesorios' },
  { name: 'Shorts', category: 'Ropa' },
  { name: 'Tenis', category: 'Calzado' },
  { name: 'Chaleco', category: 'Ropa' },
];

useEffect(() => {
  setCategories(items.reduce((acc, current)=>{
    const category = current.category as Category;
    return {...acc, [current.category]: category + 1};
  }, {Ropa: 0, Calzado: 0, Accesorios: 0}));
  setActiveUsers(users.reduce((acc, current)=>{
    current.active ? acc.active ++ : acc.inactive ++;
    return acc;
  }, {inactive:0, active: 0}));
  setProductosConDescuento(products.reduce((acc, current)=>{
    return acc + (current.discount === 0 ? 0 : 1);
  }, 0));
  setProductos(products);
  setSumaPrecios(products.reduce((acc, current)=>{
    return acc + current.price;
  }, 0));
  setSumaPreciosConDescuento(products.reduce((acc, current)=>{
    const price = current.price - (current.price * current.discount / 100);
    return acc + price;
  }, 0));
}, [])



  return (
    <View>
     <Text>
      {`PRODUCTOS`}
     </Text>
     {productos.map(p=><View><Text>{p.name}</Text></View>)}
     <Text>
      {`SUME PRECIOS: ${sumaPrecios}`}
     </Text>
      <Text>
      {`SUME PRECIOS CON DESCUENTO APLICADO: ${sumaPreciosConDescuento}`}
     </Text>
     <Text>
      {`PRODUCTOS CON DESCUENTO: ${productosConDescuento}`}
     </Text>
     <Text>
      {`USUARIOS ACTIVO: ${activeUsers.active}`}
     </Text>
     <Text>
      {`USUARIOS INACTIVO: ${activeUsers.inactive}`}
     </Text>
     <Text>
      {`CATEGORIA ROPA: ${categories.Ropa}`}
     </Text>
     <Text>
      {`CATEGORIA CALZADO: ${categories.Calzado}`}
     </Text>
     <Text>
      {`CATEGORIA ACCESORIOS: ${categories.Accesorios}`}
     </Text>
    </View>
  )
}
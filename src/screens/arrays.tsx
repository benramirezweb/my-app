import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

type typeList = {
  id: number;
  name: string;
  phone?: string;
  email?: string;
};

const localContacts = [
    { id: 1, name: 'Juan', phone: '123' },
    { id: 2, name: 'Maria', phone: '456' },
  ];

const remoteContacts = [
  { id: 2, name: 'Maria Lopez', email: 'maria@correo.com' },
  { id: 3, name: 'Luis', phone: '789', email: 'luis@correo.com' },
];

const products = [
  { id: 1, name: 'Camisa', stock: 5, price: 20, discount: 0 },
  { id: 2, name: 'Pantalón', stock: 0, price: 30, discount: 10 },
  { id: 3, name: 'Zapatos', stock: 3, price: 50, discount: 20 },
  { id: 4, name: 'Chaqueta', stock: 2, price: 100, discount: 15 },
  { id: 5, name: 'Bufanda', stock: 10, price: 15, discount: 0 },
  { id: 6, name: 'Gorra', stock: 0, price: 12, discount: 5 },
  { id: 7, name: 'Guantes', stock: 7, price: 18, discount: 0 },
  { id: 8, name: 'Calcetines', stock: 20, price: 5, discount: 0 },
  { id: 9, name: 'Sudadera', stock: 4, price: 40, discount: 25 },
  { id: 10, name: 'Cinturón', stock: 6, price: 25, discount: 0 },
  { id: 11, name: 'Sombrero', stock: 1, price: 35, discount: 0 },
  { id: 12, name: 'Vestido', stock: 8, price: 60, discount: 30 },
  { id: 13, name: 'Chaleco', stock: 0, price: 45, discount: 10 },
  { id: 14, name: 'Sandalias', stock: 12, price: 22, discount: 5 },
  { id: 15, name: 'Botas', stock: 3, price: 80, discount: 20 },
];

type ListType = {
  id: number;
  name: string;
  stock: number;
  price: number;
  discount: number;
}

const devices = [
  { userId: 1, device: 'iPhone' },
  { userId: 1, device: 'iPad' },
  { userId: 2, device: 'Android' },
  { userId: 3, device: 'Android' },
  { userId: 3, device: 'Tablet' },
  { userId: 3, device: 'Laptop' },
];

type userType = {
  userId: number;
  device: string;
};

export default function Arrays() {
  const [productsWithStock, setProductsWithStock] = useState<ListType[]>([]);
  const [productsWithoutStock, setProductsWithoutStock] = useState<ListType[]>([]);
  const [productsWithDiscount, setProductsWithDiscount] = useState<ListType[]>([]);

  const [usersObject, setUsersObject] = useState({});
  

  useEffect(()=>{
    setProductsWithStock(products.filter(p=> p.stock > 0));
    setProductsWithoutStock(products.filter(p=> p.stock === 0));
    setProductsWithDiscount(products.filter(p=> p.discount > 0));

    setUsersObject(devices.reduce((acc, current)=>{
      return acc;
    }, {}));

  },[]);

  const [usersList, setUsersList] = useState<typeList[]>(localContacts
    .map((i: typeList)=>({
      id: i.id,
      name: i.name,
      phone: i.phone ?? 'No proporcionado',
      email: i.email ?? 'No proporcionado',
    }))
  );

  const handleUpdate = () => {
    const arrayUpdated = usersList.map(user => {
      const updated = remoteContacts.find(r => r.id === user.id);
      return updated
        ? { ...user, ...updated }
        : user;
    });
    setUsersList(arrayUpdated);
  };

  return (
    <View>
      <Text>arrays</Text>
      {usersList.map(contact=>{
        return (
          <View key={contact.id} style={{borderWidth: 1, borderColor: 'black', padding: 10, marginBottom: 10}}>
            <Text>{contact.name}</Text>
            {contact.phone &&<Text>{contact.phone}</Text>}
            {contact.email && <Text>{contact.email}</Text>}
          </View>
        )
      })}
      <Button title='update' onPress={handleUpdate} />
      <Text>
        CON STOCK
      </Text>
      {productsWithStock.map(p => (
        <View>
          <Text>
            {`Producto: ${p.name} - Stock: ${p.stock}`}
          </Text>
        </View>
      ))}
      <Text>
        SIN STOCK
      </Text>
      {productsWithoutStock.map(p => (
        <View>
          <Text>
            {`Producto: ${p.name} - Stock: ${p.stock}`}
          </Text>
        </View>
      ))}
      <Text>
        CON DESCUENTO
      </Text>
      {productsWithDiscount.map(p => (
        <View>
          <Text>
            {`Producto: ${p.name} - Descuento: ${p.discount}%`}
          </Text>
        </View>
      ))}
    </View>
  )
}
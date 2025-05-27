import { useNavigation } from '@react-navigation/native';
import react, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();
  const loadUsers = async () => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users/');
      const responsedata = await response.json();
      setUsers(responsedata);
    } catch (error) {
      console.log(`Error in loadUsers: ${error}`);
    }
  }
  useEffect(()=>{
    loadUsers();
  }, []);
  const handleSelectuser = (id: string) => {
    console.log('test');
    // return;
    
    navigation.navigate('UserDetails', {userId: id});
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>
        Users
        </Text>
        {users.map((user: any) => {
          return (
            <TouchableOpacity
              onPress={() => handleSelectuser(user.id)}
              key={user.id}
              style={{ borderWidth: 1, borderColor: '#aaaaaa', padding: 20, marginBottom: 10, borderRadius: 20, width: '100%' }}
              >
              <Text>
                {user.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
});
import { useNavigation, useRoute } from '@react-navigation/native';
import react, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import axios from 'axios';

const UsersDetails = () => {
  const route = useRoute();
  const {userId} = route.params;
  const [userInfo, setUserInfo] = useState({});

  const loadUserDetails = async ()=>{
    try {
      const [userResponse, postsResponse, albumsResponse] = await Promise.all([
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`),
        axios.get(`https://jsonplaceholder.typicode.com/posts`),
        axios.get(`https://jsonplaceholder.typicode.com/albums`),
      ]);
      setUserInfo({
        ...userResponse.data,
        albumsList: albumsResponse.data
          .filter((album: any) => album.userId === userId)
          .map((album: any) => album.title),
        postsList: postsResponse.data
          .filter((post: any) => post.userId === userId)
          .map((post: any)=>post.title)
      });
    }catch (error) {
      console.log(`Error in loadUserDetails: ${error}`);
    }
  };

  useEffect(()=>{
    loadUserDetails();
  },[]);
  
  return (
    <View style={styles.container}>
      <Text
        onPress={()=>{
          console.log('userInfo');
          console.log(userInfo.postsList);
          console.log('userInfo');
        }}
      >
        UsersDetails
        {userId}
      </Text>
      <View style={{marginVertical: 20,}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 20}}>
          {`Nombre: ${userInfo.name}`}
        </Text>
        <View style={{padding: 10}}>
          <Text style={{fontSize: 18, marginVertical: 5}}>
            POSTS:
          </Text>
          {userInfo.postsList?.map(post => {
            return (
              <View key={post.id} style={{marginBottom: 10}}>
                <Text>
                  {`👍🏻 ${post}`}
                </Text>
              </View>
            );
          })}
        </View>
        <View style={{padding: 10}}>
          <Text style={{fontSize: 18, marginVertical: 5}}>
            ALBUMES:
          </Text>
          {userInfo.albumsList?.map(album => {
            return (
              <View key={album.id} style={{marginBottom: 10}}>
                <Text>
                  {`🧿 ${album}`}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default UsersDetails;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },

});
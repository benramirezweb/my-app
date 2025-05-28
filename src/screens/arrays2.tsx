import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

type typeSample = {
  name: string | undefined;
  courses: string[],
  totalSpent: number;
}

export default function Arrays2() {
  const students = [
  { id: 's1', name: 'Lucas' },
  { id: 's2', name: 'Maria' },
  { id: 's3', name: 'Juan' },
];

const courses = [
  { id: 'c1', title: 'React Native', price: 100 },
  { id: 'c2', title: 'TypeScript', price: 80 },
  { id: 'c3', title: 'Node.js', price: 120 },
];

const enrollments = [
  { studentId: 's1', courseId: 'c1' },
  { studentId: 's2', courseId: 'c2' },
  { studentId: 's1', courseId: 'c3' },
  { studentId: 's3', courseId: 'c1' },
  { studentId: 's2', courseId: 'c3' },
  { studentId: 's3', courseId: 'c2' },
];

  const loadData = () => {
  };

  useEffect(() => {
    loadData();
  }, [])
  

  return (
    <View>
      <Text>arrays2</Text>
      <Text onPress={()=>{
        const scoreBoard = {
          1: 'Books',
          2: 'Electronics',
          3: 'Furniture'
        };;
        console.log('----------------');
        Object.entries(scoreBoard).map(([test, test2])=>{
          console.log('test');
          console.log(test);
          console.log('test');
          console.log('test2');
          console.log(test2);
          console.log('test2');
          return test;
        });
        console.log('----------------');
      }}>
        TEST 1 test
      </Text>
    </View>
  )
}
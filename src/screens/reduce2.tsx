import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

type TaskType = {
  doneCount: number;
  pendingCount: number;
  total: number;
};


export default function Reduce2() {

  const tasks = [
  { userId: 'u1', task: 'Fix bug', done: true },
  { userId: 'u2', task: 'Write docs', done: false },
  { userId: 'u1', task: 'Test app', done: true },
  { userId: 'u3', task: 'Deploy', done: false },
  { userId: 'u2', task: 'Design UI', done: true },
  { userId: 'u1', task: 'Refactor', done: false },
  { userId: 'u3', task: 'Setup CI', done: true },
  { userId: 'u2', task: 'Lint code', done: true },
  { userId: 'u1', task: 'Fix typo', done: true },
];

  const loadData = () => {
    const finalObject = tasks.reduce<Record<string, TaskType>>((acc, current)=>{
      const {userId, done} = current;
      if(!acc[userId]){
        acc[userId] = {
          doneCount: 0,
          pendingCount: 0,
          total: 0,
        };
      }

      done ? acc[userId].doneCount += 1 : acc[userId].pendingCount += 1;
      acc[userId].total += 1;

      return acc;
    }, {});

    console.log('finalObject--');
    console.log(finalObject);
    console.log('finalObject--');
  };

  useEffect(() => {
    loadData();
  }, [])
  
  

  return (
    <View>
    
    </View>
  )
}
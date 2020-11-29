import React, { useEffect }  from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addBoard } from '../redux/actions';
import Leaderboard from '../compenents/ComponentLeaderboard/Leaderboard'

export default function LeaderboardScreen({ navigation }) {

  const dispatch = useDispatch();

  let group = useSelector((store) => store.groupName);

  let chartStore = useSelector((store) => store.chart);
  console.log('dispatch', chartStore);

  async function getBoard() {
    
    const response = await fetch('http://localhost:3100/leaderboard', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ group }),
    });
    const chart = await response.json();
    console.log('chart', chart);

    dispatch(addBoard(chart));
  }

  useEffect(() => {
    getBoard();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {chartStore !== undefined && (
        <View>
          <Text>Leaderboard Screen</Text>
          {chartStore.map((item) => {
            return (
              <Leaderboard
                login={item.login}
                points={item.points}
                navigation={navigation}
              />
            );
          })}
        </View>
      )}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

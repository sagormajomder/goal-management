import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleGoalList = function (enteredGoalText) {
    if (!enteredGoalText) return;
    setGoals(currGoals => [
      ...currGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    handleCloseModal();
  };

  const handleDeleteGoalItem = function (id) {
    setGoals(currGoals => currGoals.filter(goal => goal.id !== id));
  };

  const handleAddGoal = function () {
    setIsModalVisible(true);
  };

  const handleCloseModal = function () {
    setIsModalVisible(false);
  };

  return (
    <>
      <StatusBar style='auto' />
      <View style={styles.appContainer}>
        {/* <View style={styles.btnContainer}>
          <Button
            title='Add New Goal'
            color='#5e0acc'
            onPress={handleAddGoal}
          />
        </View> */}

        <Pressable
          android_ripple={{ color: '#ddd' }}
          onPress={handleAddGoal}
          // For ios to show the effect
          style={pressData => pressData.pressed && styles.iosPressed}>
          <Text style={styles.addNewGoalText}>Add New Goal</Text>
        </Pressable>

        <GoalInput
          isModalVisible={isModalVisible}
          onAddGoal={handleGoalList}
          onCloseModal={handleCloseModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={goalData => {
              return (
                <GoalItem
                  id={goalData.item.id}
                  text={goalData.item.text}
                  onDeleteGoal={handleDeleteGoalItem}
                />
              );
            }}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    </>
  );
}
//////////////////////////////
// STYLE OF THE COMPONENT
/////////////////////////////
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
  btnContainer: {
    width: '100',
  },
  iosPressed: {
    opacity: 0.8,
  },
  addNewGoalText: {
    padding: 10,
    color: '#ddd',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#5e0acc',
    padding: 10,
  },
});

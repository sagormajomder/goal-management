import { useState } from 'react';
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

function GoalInput({ onAddGoal, isModalVisible, onCloseModal }) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const handleTextInput = function (enteredText) {
    setEnteredGoalText(enteredText);
  };

  const handleGoalInput = function () {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <Modal visible={isModalVisible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/Images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Enter your goal'
          onChangeText={handleTextInput}
          value={enteredGoalText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.btnContainer}>
            <Button title='Add Goal' onPress={handleGoalInput} />
          </View>
          <View style={styles.btnContainer}>
            <Button color='red' title='Cancel' onPress={onCloseModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    width: '100%',
    padding: 8,
    marginBottom: 16,
    fontSize: 16,
    color: '#120438',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  btnContainer: {
    width: '100',
    marginHorizontal: 8,
  },
});

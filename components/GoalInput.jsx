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
            <Button
              title='Add Goal'
              color='#0ca678'
              onPress={handleGoalInput}
            />
          </View>
          <View style={styles.btnContainer}>
            <Button color='#fa5252' title='Cancel' onPress={onCloseModal} />
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
    backgroundColor: '#ffc078',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ff922b',
    backgroundColor: '#ff922b',
    width: '100%',
    padding: 10,
    marginBottom: 16,
    fontSize: 18,
    fontWeight: '300',
    color: '#3d3d3d',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  btnContainer: {
    width: '100',
    marginHorizontal: 8,
  },
});

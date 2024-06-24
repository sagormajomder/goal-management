import { Button, StyleSheet, Text, View } from 'react-native';

function GoalItem({ text, id, onDeleteGoal }) {
  return (
    <View style={styles.goalItem}>
      <View>
        <Text style={styles.goalText}>{text}</Text>
      </View>
      <View style={styles.btnContainer}>
        <Button color='red' title='Delete' onPress={() => onDeleteGoal(id)} />
      </View>
    </View>
  );
}

export default GoalItem;
const styles = StyleSheet.create({
  goalItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: '#fff',
    padding: 8,
    fontSize: 16,
  },
  btnContainer: {
    width: '100',
    marginHorizontal: 8,
  },
});

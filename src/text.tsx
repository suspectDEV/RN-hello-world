import React from 'react';
import {StyleSheet, Text} from 'react-native';

const TextConcept = () => {
  return (
    <Text style={styles.largeText}>
      <Text style={styles.bold}>Hello</Text> Android!
    </Text>
  );
};

// ..Styles
// --------------------
const styles = StyleSheet.create({
  largeText: {
    flex: 1,
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 35,
  },

  bold: {
    fontWeight: 'bold',
  },
});

export default TextConcept;

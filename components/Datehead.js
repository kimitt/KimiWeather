import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DateHead({ date }) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formatted = `${year}년 ${month}월 ${day}일`;

  return (
    <View style={styles.block}>
      <Text style={styles.dateText}>{formatted}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  block: {
    alignItems:"center",
    flexDirection: "column"
  },
  dateText: {}
});
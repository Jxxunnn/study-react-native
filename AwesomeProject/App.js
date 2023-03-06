import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [isHungry, setIsHungry] = useState(true);
  const [text, setText] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [time, setTime] = useState(0);

  const getMoives = async () => {
    try {
      const response = await fetch("https://reactnative.dev/movies.json");
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMoives();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={{ fontSize: 40 }}>
        {text
          .split("")
          .map((word) => word && "🎉")
          .join(" ")}
      </Text>
      <TextInput placeholder="인풋창이야" onChangeText={(t) => setText(t)} />
      <Button
        onPress={() => {
          setIsHungry(!isHungry);
        }}
        disabled={!setIsHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
      />
      <Text style={styles.title}>{data[0]?.title}</Text>
      <Text>{time}</Text>
      <Button
        title="카운터버튼"
        onPress={() => {
          setTime((prev) => prev + 1);
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#f00",
    fontSize: 20,
  },
});

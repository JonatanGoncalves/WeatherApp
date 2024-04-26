import { StyleSheet, Text, View } from "react-native";

export default function Climas() {
    return(
        <View style={styles.container}>
            <Text>Joinville</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
      container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }
    });
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-paper";

export default function Climas() {
    return(
        <View style={styles.container}>
            <Text>Clima de Joinville - 29/04/2024</Text>
            <Text>{"\n"}</Text>
            <Icon 
              source={"cloud"}
              size={100}
            />
            <Text>Joinville - Nublado</Text>
            <Icon 
              source={"weather-pouring"}
              size={100}
            />
            <Text>Araquari - Chuva</Text>
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
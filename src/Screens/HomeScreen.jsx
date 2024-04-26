import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
    return(
        <View style={styles.container}>
            <Text>Climas de Joinville</Text>
            <Text>{"\n"}</Text>
            <Button
            title='Ir Para a Tela de Climas'
            onPress={() =>
            navigation.navigate('Climas', { name: 'Climas' })}
        />
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
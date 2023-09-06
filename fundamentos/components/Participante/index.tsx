import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type props = {
    name: String,
    onRemove: () => void
}

export function Produto(props : props){

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <TouchableOpacity style={styles.button} onPress={props.onRemove}>
                <Text style={styles.textButton}>-</Text>
            </TouchableOpacity>
        </View>
    )
}
import { View, Text } from "react-native";
import Animated from "react-native-reanimated";
import {MaterialIcons} from "@expo/vector-icons";

import { styles } from "./styles";

type Props = {
    quantity: number,
    onClear: () => void,
    onSearch: () => void
}

export default function Selected({ quantity, onClear, onSearch}:Props){

    return(
        <Animated.View>
            <View style={styles.header}>
                <Text style={styles.label}>
                    {quantity} Ingredientes selecionados
                </Text>
                <MaterialIcons name="close" size={24} onPress={onClear}/>
            </View>
        </Animated.View>
    )
}
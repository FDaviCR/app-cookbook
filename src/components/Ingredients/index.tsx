import { Pressable, Image, Text } from "react-native";

import { styles } from "./styles";

export default function Ingredient(){
    return(
        <Pressable>
            <Image source={require("@/assets/images/tomato.png")}/>
            <Text>Maça</Text>
        </Pressable>
    )
}
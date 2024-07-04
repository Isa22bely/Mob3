import React from "react";
import { View, Text, TouchableOpacity } from "react-native"
import { MenuStackTypes } from "../../navigation/MenuStack.navigation";


export function Slide01({ navigation }: MenuStackTypes){
    return(
        <View>
            <Text>
                Olaaaaa
            </Text>
            <TouchableOpacity onPress={() => navigation.push("Slide2")}>
                <Text>
                    Slide 2
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push("Tab")}>
                <Text>
                    Slide 
                </Text>
            </TouchableOpacity>
        </View>
    )
}
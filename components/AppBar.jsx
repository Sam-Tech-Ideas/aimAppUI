import { View, Text } from 'react-native'
import React from 'react'
import { Feather } from "@expo/vector-icons";

const AppBar = () => {
  return (
    <View className="bg-fixed flex-row justify-between items-center  p-4  ">
      <View>
        <Text className="text-white font-bold text-lg">Home</Text>
      </View>
      <View className="flex-row items-center gap-4">
        <Feather name="bell" size={24} color="white" />
        <Feather name="menu" size={24} color="white" />
      </View>
    </View>
  );
}

export default AppBar
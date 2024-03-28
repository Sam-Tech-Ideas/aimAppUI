import React, { useEffect } from "react";
import { FlatList, Image, LogBox, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../components/AppBar";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TrendSection from "../components/TrendSection";


const HomeScreen = () => {

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  return (
    <SafeAreaView className="bg-red-800">
      <StatusBar />
      <AppBar />

        <View className=" w-full h-full bg-white rounded-lg   p-4 rounded-t-2xl ">
                <ScrollView vertical={true} showsVerticalScrollIndicator={false}  className="">

          <View className="flex-row justify-between items-center ">
            <View className="flex-col ">
              <Text className="text-lg text-red-800">Good Afternoon</Text>

              <Text
                className="text-3xl  text-red-800 font-bold truncate"
                ellipseMode="tail"
              >
                {/**truncate text */}
                Samuel Agyema...
              </Text>
            </View>
            <View className="border-red-700 border-2 rounded-lg p-">
              <Image
                className="h-[56] w-14 object-fill bg-green-600 "
                borderRadius={5}
                source={{
                  uri: "https://clipart-library.com/2023/programmer-clipart-md.png",
                }}
              />
            </View>
          </View>

          <View className="my-6">
            <Text className="my-4 text-lg">Your next class</Text>

            <View className="bg-red-50 w-full rounded-xl h-32 flex-row items-center justify-center">
              <Text className="text-lg">Your next class will appear hear</Text>
            </View>
          </View>

          <View className="">
            <Text className="text-lg">What would you like to do?</Text>

            <View className="flex-row gap-4 items-center my-4">
              <View className="bg-red-50 items-center  w-28 h-28  justify-center rounded-xl">
                <View className="border-2 p-[2] border-red-800">
                  <Ionicons name="stats-chart-outline" size={14} color="red" />
                </View>
                <Text className="font-bold p-4 text-red-800">
                  Check Results
                </Text>
              </View>
              <View>
                <Ionicons name="wallet-outline" size={24} color="black" />
                <Text>Register Courses</Text>
              </View>
              <View>
                <MaterialCommunityIcons
                  name="clipboard-text-outline"
                  size={24}
                  color="black"
                />
                <Text>Pay Fees</Text>
              </View>
            </View>
          </View>

          {/* <View>
          <Text>
            What's trending 
          </Text>

          <FlatList data={[]} renderItem={() => <View>
            <Text>
              What's trending
            </Text>
          </View>} />
        </View> */}
          <TrendSection />
          </ScrollView>
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

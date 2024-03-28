import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { EvilIcons } from "@expo/vector-icons";

const TrendSection = () => {

    const trends = [
      {
        id: 1,
        description:
          "SRC Donates Patrol Vehicle to Ghana Police Service to strengthen security",
        image:
          "https://www.thrillernewsgh.com/wp-content/uploads/2022/02/IMG-20220202-WA0035.jpg",

        date: "12 Mar 2024",
      },

      {
        id: 2,
        description:"KNUST Commemorates World Engineering Day",
        image:
          "https://images.unsplash.com/photo-1631666953940-2c1b5b4b7a5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjIwNjN8MHwxfGFsbHwxf",
          date: "12 Mar 2024",
      },

      {
        id: 3,
        description:"Workshop on Enhancing Publication Impact and Visibility for Researchers",
        image:
          "https://images.unsplash.com/photo-1711116178390-b01368ed353d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          date: "12 Mar 2024",
      },

      {
        id: 4,
        date: "12 Mar 2024",
        description:"Faculty of Law Holds 2022 Annual Law Conference",
        image:
          "https://images.unsplash.com/photo-1631666953940-2c1b5b4b7a5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjIwNjN8MHwxfGFsbHwxf",
      },
    ];

        
  return (
    <View>
      <Text className="text-primary text-lg">What's trending?</Text>

      <FlatList
        data={trends}
        renderItem={({ item }) => (
          <View className="my-4 p-2">
            <Image
              className="h-40 w-full rounded-lg"
              source={{ uri: item.image }}
            />
               <View className="">

            <Text className="font-bold text-lg py-1">{item.description}</Text>
            <View className="flex-row justify-between ">
              <View className="flex-row  gap-2">
                <EvilIcons name="clock" size={20} color="black" />
                <Text>12 Mar 2024</Text>
              </View>
              <View>
                <EvilIcons name="share-google" size={20} color="black" />
              </View>
            </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

export default TrendSection
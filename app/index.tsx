import ExpoNativeConfigurationModule from "@/modules/expo-native-configuration/src/ExpoNativeConfigurationModule";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>{ExpoNativeConfigurationModule.hello()}</Text>
    </View>
  );
}

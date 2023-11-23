import { ActivityIndicator, Text, View } from "react-native";

type TLoaderProps = {
  title: string;
};
export function Loader({ title }: TLoaderProps) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
      <Text style={{ marginTop: 15 }}>{title}</Text>
    </View>
  );
}

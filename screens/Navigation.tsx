import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./HomeScreen/HomeScreen";
import { FullArticleScreen } from "./FullArticleScreen/FullArticleScreen";

const Stack = createNativeStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "News" }}
        />
        <Stack.Screen
          name="FullArticle"
          component={FullArticleScreen}
          options={{ title: "Full article" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

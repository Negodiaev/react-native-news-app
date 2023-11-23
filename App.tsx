import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Platform, NativeModules } from "react-native";
import { HomeScreen } from "./screens/HomeScreen/HomeScreen";
import { FullArticleScreen } from "./screens/FullArticleScreen/FullArticleScreen";
import { Navigation } from "./screens/Navigation";

const { StatusBarManager } = NativeModules;

type TArticle = {
  id: string;
  title: string;
  imgUrl: string;
  text: string;
  createdAt: string;
};

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // https://blog.logrocket.com/customizing-react-native-status-bar-route/
        paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
      }}
    >
      {/*<HomeScreen />*/}
      {/*<FullArticleScreen />*/}
      <Navigation />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

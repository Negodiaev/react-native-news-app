import {
  Alert,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { TArticle } from "../../types";
import { Loader } from "../../components/Loader/Loader";
import { Post } from "../../components/Post/Post";

async function fetchArticles(): Promise<TArticle[]> {
  return await fetch("https://6537e1c3a543859d1bb0fbd3.mockapi.io/articles")
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
      Alert.alert("Error", "Unable to fetch articles");
    });
}

export function HomeScreen({ navigation }) {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState<TArticle[] | null>(null);

  function updateArticles() {
    setLoading(true);
    fetchArticles()
      .then((articles) => setArticles(articles))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    updateArticles();
  }, []);

  if (isLoading) {
    return <Loader title="Loading articles..." />;
  }

  return (
    <>
      {articles && (
        <FlatList
          data={articles}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("FullArticle", {
                  id: item.id,
                  title: item.title,
                })
              }
            >
              <Post {...item} />
            </TouchableOpacity>
          )}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={updateArticles} />
          }
        />
      )}
    </>
  );
}

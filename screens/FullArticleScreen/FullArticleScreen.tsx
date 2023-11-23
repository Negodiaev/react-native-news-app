import { Alert, ScrollView, View } from "react-native";
import {
  ImageStyled,
  ImageWrapStyled,
  TextStyled,
} from "./FullArticle.styledScreen";
import { useEffect, useState } from "react";
import { TArticle } from "../../types";
import { Loader } from "../../components/Loader/Loader";

async function fetchArticle(id: string): Promise<TArticle> {
  return await fetch(
    `https://6537e1c3a543859d1bb0fbd3.mockapi.io/articles/${id}`
  )
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
      Alert.alert("Error", "Unable to fetch an article");
    });
}

export function FullArticleScreen({ route, navigation }) {
  const { id = "1", title } = route.params;
  const [isLoading, setLoading] = useState<boolean>(true);
  const [article, setArticle] = useState<TArticle[] | null>(null);

  function updateArticle() {
    setLoading(true);
    fetchArticle(id)
      .then((article) => setArticle(article))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    navigation.setOptions({ title });

    updateArticle();
  }, []);

  if (isLoading) {
    return <Loader title="Loading the article..." />;
  }

  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        {article && (
          <>
            <ImageWrapStyled>
              <ImageStyled source={{ uri: article.imgUrl }} />
            </ImageWrapStyled>
            <TextStyled>{article.text}</TextStyled>
          </>
        )}
      </View>
    </ScrollView>
  );
}

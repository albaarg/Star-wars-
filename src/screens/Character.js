import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import {
  ItemStyle,
  CharacterTitle,
  Container,
  ErrorText,
  ContainerSection,
  TextSection,
} from "./styles";
import { AntDesign } from "@expo/vector-icons";
import theme from "../config/theme";
import { useGetIdQuery } from "../store/api";
import { saveFavorites, loadFavorites } from "../store/storage";

const Characters = () => {
  const [favorites, setFavorites] = useState({});
  const [characters, setCharacters] = useState([]);
  const { data, error, isLoading } = useGetIdQuery();

  const handleFavoritePress = (item) => {
    const isFavorite = item.id in favorites;
    if (isFavorite) {
      const newFavorites = { ...favorites };
      delete newFavorites[item.id];
      setFavorites(newFavorites);
      setCharacters((prevCharacters) =>
        prevCharacters.map((character) =>
          character.id === item.id ? { ...character, favorite: true } : character
        )
      );
    } else {
      setFavorites((prevFavorites) => ({ ...prevFavorites, [item.id]: item }));
      setCharacters((prevCharacters) =>
        prevCharacters.map((character) =>
          character.id === item.id ? { ...character, favorite: false } : character
        )
      );
    }
  };
 

  useEffect(() => {
    const fetchFavorites = async () => {
      const updatedCharacters = await loadFavorites();
      if (updatedCharacters) {
        setCharacters(updatedCharacters);
      }
    };
    fetchFavorites();
  }, []);

  useEffect(() => {
    saveFavorites(Object.values(favorites));
  }, [favorites]);

  const renderItem = ({ item }) => (
    <ScrollView>
      <ItemStyle>
        <View>
          <CharacterTitle>{item.name}</CharacterTitle>
          <ContainerSection>
            <TextSection>{item.gender} |</TextSection>
            <TextSection> {item.birth_year}</TextSection>
          </ContainerSection>
        </View>
        <TouchableOpacity onPress={() => handleFavoritePress(item)}>
          <AntDesign
            name={item.id in favorites ? "heart" : "hearto"}
            size={14}
            color={theme.color.green}
          />
        </TouchableOpacity>
      </ItemStyle>
    </ScrollView>
  );

  return (
    <Container>
      <View>
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : error ? (
          <ErrorText>Error: {error.message}</ErrorText>
        ) : (
          <>
            <FlatList
              data={data.results}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </>
        )}
      </View>
    </Container>
  );
};

export default Characters;

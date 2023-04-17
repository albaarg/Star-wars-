import React, { useState, useEffect } from "react";
import theme from "../config/theme";
import { View, FlatList, TouchableOpacity, ScrollView } from "react-native";
import {
  Container,
  TextTitle,
  Input,
  BoxInput,
  Box,
  TextSection,
  ItemStyle,
  CharacterTitle,
  ContainerSection,
} from "./styles";
import { loadFavorites, saveFavorites } from "../store/storage";
import { AntDesign } from "@expo/vector-icons";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false);

  const searchCharacter = (text) => {
    const filteredCharacters = favorites.filter((character) => {
      return character.name
        .toString()
        .toLowerCase()
        .includes(text.toLowerCase());
    });
    setSearch(
      filteredCharacters.length ? filteredCharacters : [{ name: "Not found" }]
    );
  };

  useEffect(() => {
    loadFavorites().then((favorites) => {
      if (favorites) {
        setFavorites(favorites);
      }
    });
  }, [search]);

  const removeFavorite = (character) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.name !== character.name
    );
    setFavorites(updatedFavorites);
    saveFavorites(updatedFavorites);
  };

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
        <TouchableOpacity onPress={() => removeFavorite(item)}>
          <AntDesign
            name={
              favorites.some((favorite) => favorite?.name === item?.name)
                ? "heart"
                : "hearto"
            }
            size={14}
            color={
              favorites.some((favorite) => favorite?.name === item?.name)
                ? `${theme.color.green}`
                : `${theme.color.green}`
            }
          />
        </TouchableOpacity>
      </ItemStyle>
    </ScrollView>
  );

  return (
    <Container>
      <Box>
        <TextTitle>Search a favourite</TextTitle>
        <BoxInput>
          <Input
            placeholder="Search"
            placeholderTextColor={`${theme.color.placeholder}`}
            onChangeText={searchCharacter}
            onClear={() => setSearch("")}
          />
        </BoxInput>
      </Box>
      <View>
        {search.length === 0 ? (
          <TextTitle>No favorite characters</TextTitle>
        ) : (
          <FlatList
            data={search}
            keyExtractor={(item) => item?.name?.toString()}
            renderItem={renderItem}
          />
        )}
      </View>
    </Container>
  );
};

export default Favorites;

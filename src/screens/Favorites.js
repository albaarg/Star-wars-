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
  ContainerSection

} from "./styles";
import { loadFavorites } from "../store/storage";
import { AntDesign } from "@expo/vector-icons";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites().then((favorites) => {
      if (favorites) {
        setFavorites(favorites);
      }
    });
  }, []);

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
            name={
              favorites.some((favorite) => favorite?.id === item?.id)
                ? "heart"
                : "hearto"
            }
            size={14}
            color={
              favorites.some((favorite) => favorite?.id === item?.id)
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
          />
        </BoxInput>
      </Box>
      <View>
        {favorites.length === 0 ? (
          <TextTitle>No favorite characters</TextTitle>
        ) : (
          <FlatList
            data={favorites}
            keyExtractor={(item) => item?.id?.toString()}
            renderItem={renderItem}
          />
        )}
      </View>
    </Container>
  );
};

export default Favorites;

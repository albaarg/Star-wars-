import styled from "styled-components/native";
import theme from "../config/theme";

export const ItemStyle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-vertical: 14px;
  padding-horizontal: 24px;
  margin-bottom: 16px;
`;

export const CharacterTitle = styled.Text`
  color: ${theme.color.white};
  font-size: 14px;
  font-weight: 600;
`;

export const Container = styled.SafeAreaView`
  background-color: ${theme.color.black};
  flex: 1;
`;

export const TextTitle = styled.Text`
  color: ${theme.color.white};
  padding: 12px;
  margin: 2px;
`;

export const Input = styled.TextInput`
  width: 95%;
  height: 45px;
  padding: 12px;
  border-width: 0.5px;
  border-color: ${theme.color.white};
  color: ${theme.color.white};
  border-radius: 10px;
`;

export const BoxInput = styled.View`
  align-items: center;
`;

export const Box = styled.View`
  padding: 10px;
`;

export const ErrorText = styled.Text`
color: ${theme.color.white};
font-size: 14px;
`;

export const ContainerSection = styled.View`
flex-direction: row;
`;

export const TextSection = styled.Text`
color: ${theme.color.gray};
font-size: 12px;
`;
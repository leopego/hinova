import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { colors } from "../../assets/colors";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding-right: ${RFValue(16)}px;
  padding-left: ${RFValue(16)}px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: ${RFValue(40)}px;
  background-color: ${colors.gray};
  border-radius: 10px;
  padding-left: ${RFValue(12)}px;
  margin-top: ${RFValue(12)}px;
`;

export const Enviar = styled.TouchableOpacity`
  margin-top: ${RFValue(12)}px;
  width: 100%;
  height: ${RFValue(40)}px;
  background-color: ${colors.blue};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const EnviarTitle = styled.Text`
  color: #fff;
  font-size: ${RFValue(14)}px;
  font-weight: 500;
`;

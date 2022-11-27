import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: ${RFValue(16)}px;
  padding-right: ${RFValue(16)}px;
  padding-left: ${RFValue(16)}px;
  background-color: #fff;
`;

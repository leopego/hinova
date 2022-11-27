import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  overflow: hidden;
  border-radius: 6px;
  margin-top: ${RFValue(10)}px;
  width: 100%;
  background-color: #f7f7f8;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(10)}px;
  color: #464853;
  padding-left: ${RFValue(8)}px;
`;

export const IconContainer = styled.View`
  background-color: #0066ff;
  padding: ${RFValue(10)}px;
`;

export const Icon = styled.Image`
  width: ${RFValue(16)}px;
  height: ${RFValue(16)}px;
`;

import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ContainerDetails = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const ImagesContainer = styled.View`
  width: 100%;
  height: ${RFValue(200)}px;
  background-color: #f7f7f8;
  justify-content: center;
  align-items: center;
`;

export const ImagesText = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: 600;
`;

export const InformationContainer = styled.View`
  flex: 1;
  padding: ${RFValue(20)}px;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: 500;
`;

export const Description = styled.Text`
  margin-top: ${RFValue(8)}px;
  font-size: ${RFValue(10)}px;
  color: #464853;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: #ececec;
  margin-top: ${RFValue(10)}px;
`;

export const PhonesContainer = styled.View`
  flex-direction: row;
`;

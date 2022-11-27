import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  margin-bottom: ${RFValue(14)}px;
  background-color: #f7f7f8;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
`;

export const RowWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(12)}px;
`;

export const LogoWrapper = styled.View`
  overflow: hidden;
  width: ${RFValue(44)}px;
  height: ${RFValue(44)}px;
  border-radius: 60px;
  background-color: #fff;
  margin-right: ${RFValue(10)}px;
`;

export const Logo = styled.Image`
  height: 100%;
`;

export const InformationWrapper = styled.View`
  flex: 1;
`;

export const InformationTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: 600;
  color: #000000;
  margin-bottom: ${RFValue(4)}px;
`;

export const InformationDescription = styled.Text`
  font-size: ${RFValue(10)}px;
  color: #464853;
`;

export const LocationWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  padding: ${RFValue(8)}px;
  justify-content: flex-start;
  align-items: center;
  background-color: #0066ff;
`;

export const Location = styled.Text`
  flex: 1;
  font-size: ${RFValue(10)}px;
  color: #fff;
`;

export const Icon = styled.Image`
  width: ${RFValue(16)}px;
  height: ${RFValue(16)}px;
  margin-right: ${RFValue(8)}px;
`;

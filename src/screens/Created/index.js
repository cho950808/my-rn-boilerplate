import React, { useState } from "react";
import { Text, StatusBar, View, Image, ImageBackground } from "react-native";

import styled from "styled-components/native";
import assets from "../../../assets";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #141a26;
  flex-direction: column;
`;

const BtnBox = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 20px;
`;

const Btn = styled.Pressable`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fc7643;
  font-size: 15px;
  font-weight: bold;
  border-radius: 9px;
  font-weight: bold;
  width: 90%;
`;

const BtnName = styled.Text`
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  color: #ffffff;
`;

const HeaderImgBox = styled.View`
  flex: 0.6;
  overflow: hidden;
`;

const CreatedBg = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const CreatedImg = styled.Image`
  width: 20%;
  height: 20%;
`;

const Section = styled.View`
  flex: 0.4;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
`;

const TitleText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 17px;
`;

const DescText = styled.Text`
  color: #ffffff;
`;

const CreatedScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="light-content" translucent={false} />
      <Container>
        <HeaderImgBox>
          <CreatedBg source={assets.created_bg} style={{ resizeMode: "cover" }}>
            <CreatedImg
              style={{
                resizeMode: "contain",
              }}
              source={assets.created_ic}
            />
          </CreatedBg>
        </HeaderImgBox>
        <Section>
          <TitleText>Wallet created</TitleText>
          <DescText>Now you can use your creta wallet.</DescText>
          <BtnBox>
            <Btn onPress={() => navigation.navigate("login")}>
              <BtnName>Login</BtnName>
            </Btn>
          </BtnBox>
        </Section>
      </Container>
    </>
  );
};

export default CreatedScreen;

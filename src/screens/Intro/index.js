import React, { useState } from "react";
import { Text, StatusBar, View, Image, ImageBackground } from "react-native";

import styled from "styled-components/native";
import assets from "../../../assets";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #141a26;
  flex-direction: column;
`;

const BtnWrap = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const BtnBox = styled.Pressable`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fc7643;
  font-size: 15px;
  font-weight: bold;
  border-radius: 7px;
  font-weight: bold;
  width: 100%;
  border: #fbaf93;
  border-width: 1px;
`;

const BtnText = styled.Text`
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

const IntroImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const IntroLogo = styled.Image`
  width: 50%;
  height: 50%;
`;

const Section = styled.View`
  flex: 0.4;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px;
`;

const TitleText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 5px;
`;

const IntroScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent={false}
        // backgroundColor={"transparent"}
      />
      <Container>
        <HeaderImgBox>
          <IntroImage source={assets.intro_bg} style={{ resizeMode: "cover" }}>
            <IntroLogo source={assets.logo} style={{ resizeMode: "contain" }} />
          </IntroImage>
        </HeaderImgBox>

        <Section>
          <BtnWrap>
            <TitleText>If your are new here</TitleText>
            <BtnBox onPress={() => navigation.navigate("createWallet")}>
              <BtnText>Create</BtnText>
            </BtnBox>
          </BtnWrap>

          <BtnWrap>
            <TitleText>If you have wallet</TitleText>
            <BtnBox onPress={() => navigation.navigate("bring")}>
              <BtnText>Import wallet</BtnText>
            </BtnBox>
          </BtnWrap>
        </Section>
      </Container>
    </>
  );
};

export default IntroScreen;

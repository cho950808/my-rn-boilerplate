import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
  Pressable,
  StatusBar,
} from "react-native";

import styled from "styled-components/native";
import assets from "../../../assets";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #141a26;
`;

const Wordbox = styled.View`
  margin-top: 20px;
`;

const WordInput = styled.TextInput`
  color: #ffffff;
  background-color: #273248;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  border: #808080;
  border-width: 1px;
  margin-top: 5px;
`;

const BtnBox = styled.View`
  width: 100%;
  align-items: center;
  position: absolute;
  bottom: 0px;
  z-index: 1;
  margin-bottom: 15px;
`;

const Btn = styled.Pressable`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fc7643;
  font-size: 15px;
  font-weight: bold;
  border-radius: 7px;
  font-weight: bold;
  width: 90%;
  border: #fbaf93;
  border-width: 1px;
`;

const BtnName = styled.Text`
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  color: #ffffff;
`;

const HeaderWrap = styled.Pressable`
  padding: 30px;
  background-color: #273248;
  justify-content: space-between;
  flex-direction: row;
`;

const HeaderBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

const BackImg = styled.Image``;

const BackText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  margin-left: 20px;
  font-size: 15px;
`;

const Cancel = styled.Pressable``;

const CancelText = styled.Text`
  color: #ff7373;
  font-size: 15px;
`;

const Section = styled.View`
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const WordText = styled.Text`
  color: #ffffff;
`;

const ValWrap = styled.View`
  margin-top: 15px;
`;

const ValBox = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding-top: 2px;
  padding-bottom: 2px;
`;

const ValCheckImg = styled.Image`
  margin-left: 5px;
`;

const ValCheck = styled.Text`
  color: #ffffff;
  margin-left: 5px;
`;

const BringWallet = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="light-content" translucent={false} />
      <Container>
        <HeaderWrap onPress={() => navigation.goBack()}>
          <HeaderBox>
            <BackImg source={assets.back} />
            <BackText>import words</BackText>
          </HeaderBox>
          <Cancel onPress={() => navigation.popToTop()}>
            <CancelText>Cancel</CancelText>
          </Cancel>
        </HeaderWrap>

        <Section>
          <Wordbox>
            <WordText>Words : </WordText>
            <WordInput
              placeholderTextColor="#ffffff"
              placeholder="Enter your words"
              returnKeyType="done"
              style={{ paddingLeft: 15 }}
              // onSubmitEditing={() => about_ref.current.focus()}
              // blurOnSubmit={false}
            />
          </Wordbox>
        </Section>

        <Section>
          <Wordbox>
            <WordText>Password : </WordText>
            <WordInput
              placeholderTextColor="#ffffff"
              placeholder="Enter your password"
              returnKeyType="next"
              style={{ paddingLeft: 15 }}
              // onSubmitEditing={() => about_ref.current.focus()}
              // blurOnSubmit={false}
            />
          </Wordbox>

          <ValWrap>
            <ValBox>
              <ValCheckImg source={assets.green_check} />
              <ValCheck>Least 8 letters</ValCheck>
            </ValBox>

            <ValBox>
              <ValCheckImg source={assets.green_check} />
              <ValCheck>Use capital letters</ValCheck>
            </ValBox>

            <ValBox>
              <ValCheckImg
                source={assets.gray_check}
                style={{ tintColor: "#808080" }}
              />
              <ValCheck style={{ color: "#808080" }}>Least 8 letters</ValCheck>
            </ValBox>
          </ValWrap>
        </Section>

        <Section>
          <Wordbox>
            <WordText>Check password : </WordText>
            <WordInput
              placeholderTextColor="#ffffff"
              placeholder="Enter your password"
              returnKeyType="done"
              style={{ paddingLeft: 15 }}
              // onSubmitEditing={() => about_ref.current.focus()}
              // blurOnSubmit={false}
            />
          </Wordbox>
        </Section>

        <BtnBox>
          <Btn onPress={() => navigation.navigate("login")}>
            <BtnName>Next</BtnName>
          </Btn>
        </BtnBox>
      </Container>
    </>
  );
};

export default BringWallet;

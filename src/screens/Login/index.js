import React, { useState } from "react";
import {
  Text,
  StatusBar,
  View,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";

import styled from "styled-components/native";
import assets from "../../../assets";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #141a26;
  flex-direction: column;
`;

const BoxWrap = styled.View`
  margin-top: 20px;
`;

const Box = styled.TextInput`
  color: #ffffff;
  background-color: #273248;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  border: ${({ focused }) => (focused ? `#ffffff` : `#808080`)};
  border-width: 1px;
  margin-top: 5px;
`;

const BtnBox = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 10px;
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
  width: 100%;
`;

const BtnName = styled.Text`
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  color: #ffffff;
`;

const ImgBox = styled.View`
  flex: 0.6;
  overflow: hidden;
`;

const BackgroundImg = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.Image`
  width: 50%;
  height: 50%;
`;

const Section = styled.View`
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 5px;
  padding-top: 5px;
  flex: 0.4;
`;

const FindGuide = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Guide = styled.Text`
  color: #ffffff;
`;

const LoginScreen = ({ navigation }) => {
  const [focused, setFocused] = useState(false);
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent={false}
        // backgroundColor={"transparent"}
      />
      <Container>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "android" ? 10 : 0}
        >
          <ImgBox>
            <BackgroundImg
              source={assets.login_bg}
              style={{
                resizeMode: "cover",
              }}
            >
              <LogoImg
                style={{
                  resizeMode: "contain",
                }}
                source={assets.logo}
              />
            </BackgroundImg>
          </ImgBox>

          <Section>
            <BoxWrap>
              <Box
                placeholderTextColor="#ffffff"
                placeholder="mirror"
                returnKeyType="done"
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={{ paddingLeft: 15 }}
                focused={focused}
                // onSubmitEditing={() => about_ref.current.focus()}
                // blurOnSubmit={false}
              />
            </BoxWrap>

            <BtnBox>
              <Btn onPress={() => navigation.navigate("main")}>
                <BtnName>Login</BtnName>
              </Btn>
            </BtnBox>

            <FindGuide>
              <Guide>{`Forgot your password?`}</Guide>
              <Guide>
                {`you can `}
                <Guide style={{ color: "#0AB0E4" }}>
                  {`start with secret quotes.\n`}
                </Guide>
              </Guide>
              <Guide>
                {`Need Help? `}
                <Guide style={{ color: "#0AB0E4" }}>{`Visit Creta.`}</Guide>
              </Guide>
            </FindGuide>
          </Section>
        </KeyboardAvoidingView>
      </Container>
    </>
  );
};

export default LoginScreen;

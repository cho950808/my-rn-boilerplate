import React, { useState } from "react";
import {
  Text,
  StatusBar,
  View,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";

import styled from "styled-components/native";
import assets from "../../../assets";
import Header from "../../components/Header";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #141a26;
  flex-direction: column;
`;

const BoxWrap = styled.View`
  margin-top: 15px;
  width: 100%;
`;

const Box = styled.View`
  color: #ffffff;
  background-color: #273248;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  border-radius: 10px;
  border: #808080;
  border-width: 1px;
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
`;

const BoxTitle = styled.Text`
  color: #ffffff;
  font-size: 13px;
`;

const TokenImgWrap = styled.View`
  width: 50px;
  height: 50px;
  border-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 10px;
`;

const TokenImg = styled.Image`
  width: 100%;
  height: 100%;
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
  width: 100%;
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

const SendWrap = styled.View`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 20px;
`;

const SendBox = styled.View`
  color: #ffffff;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
  border: #808080;
  border-width: 1px;
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  justify-content: space-between;
`;

const SendImgWrap = styled.View`
  width: 20px;
  height: 20px;
  border-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 10px;
`;

const SendImg = styled.Image`
  width: 100%;
  height: 100%;
`;

const CancelImgWrap = styled.View`
  width: 10px;
  height: 10px;
  border-color: #ffffff;
  /* border-radius: 10px; */
  overflow: hidden;
`;

const CancelImg = styled.Image`
  width: 100%;
  height: 100%;
`;

const Send = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const SendAdrsWrap = styled.View`
  width: 80%;
`;

const SendAdrs = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 15px;
`;

const TopSection = styled.View`
  background-color: #273248;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: flex-start;
`;

const TopTitleWrap = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const SendTitle = styled.Text`
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
`;

const CancelBtn = styled.Pressable``;

const Cancel = styled.Text`
  color: #ff7373;
  font-size: 15px;
`;

const BodySection = styled.View`
  flex: 1;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
`;

const GuideWrap = styled.View`
  background-color: #2b2b27;
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  border-color: #4b4b27;
  border-width: 1px;
`;

const Guide = styled.Text`
  color: #ffffff;
  font-size: 14px;
`;

const Token = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 3px;
`;

const TokenBalance = styled.View`
  flex-direction: row;
`;

const Balance = styled.Text`
  color: #808080;
  font-weight: bold;
  font-size: 13px;
`;

const AmountWrap = styled.View`
  flex-direction: row;
  margin-bottom: 3px;
`;

const Amount = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 15px;
`;

const AmountDollar = styled.Text`
  color: #606060;
  font-weight: bold;
  font-size: 12px;
`;

const SendScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="light-content" translucent={false} />
      <Container>
        <Header />

        <TopSection>
          <TopTitleWrap>
            <SendTitle>Send</SendTitle>
            <CancelBtn>
              <Cancel>Cancel</Cancel>
            </CancelBtn>
          </TopTitleWrap>

          <SendWrap>
            <SendBox>
              <Send>
                <SendImgWrap>
                  <SendImg
                    source={assets.send_check}
                    style={{ resizeMode: "cover" }}
                  />
                </SendImgWrap>
                <SendAdrsWrap>
                  <SendAdrs>
                    0x25d5DC5C5f5321d98b0fF859B8e133286A6312cd
                  </SendAdrs>
                </SendAdrsWrap>
              </Send>
              <CancelImgWrap>
                <CancelImg
                  source={assets.cancel}
                  style={{ resizeMode: "cover" }}
                />
              </CancelImgWrap>
            </SendBox>
          </SendWrap>
        </TopSection>

        <BodySection>
          <GuideWrap>
            <Guide>
              {`New adress detected.\n`}
              <Guide style={{ color: "#fcc843" }}>{`Click here `}</Guide>
              {`to add to your adress book`}
            </Guide>
          </GuideWrap>

          <BoxWrap>
            <BoxTitle>Asset:</BoxTitle>
            <Box>
              <TokenImgWrap>
                <TokenImg
                  source={assets.aoura}
                  style={{ resizeMode: "cover" }}
                />
              </TokenImgWrap>
              <View>
                <Token>AOURA</Token>
                <TokenBalance>
                  <Balance>Balance:</Balance>
                  <Balance style={{ marginLeft: 10 }}>0.252864 AOURA</Balance>
                </TokenBalance>
              </View>
            </Box>
          </BoxWrap>

          <BoxWrap>
            <BoxTitle>Amount:</BoxTitle>
            <Box>
              <View>
                <AmountWrap>
                  <Amount>0.12</Amount>
                  <Amount style={{ marginLeft: 10 }}>AOURA</Amount>
                </AmountWrap>
                <AmountDollar>$1251.44</AmountDollar>
              </View>
            </Box>
          </BoxWrap>

          <BtnBox>
            <Btn onPress={() => navigation.navigate("main")}>
              <BtnName>Send</BtnName>
            </Btn>
          </BtnBox>
        </BodySection>
      </Container>
    </>
  );
};

export default SendScreen;

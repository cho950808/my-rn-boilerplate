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

const BtnBox = styled.View`
  width: 100%;
  align-items: center;
  bottom: 0px;
  margin-top: 15px;
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

const ReceiveWrap = styled.View`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 20px;
`;

const ReceiveBox = styled.View`
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

const QrImgWrap = styled.View`
  width: 20px;
  height: 20px;
  border-color: #ffffff;
  /* border-radius: 10px; */
  overflow: hidden;
  /* margin-right: 10px; */
`;

const QrImg = styled.Image`
  width: 100%;
  height: 100%;
`;

const TopTitleWrap = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const ReceiveTitle = styled.Text`
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
`;

const CancelBtn = styled.Pressable``;

const Cancel = styled.Text`
  color: #ff7373;
  font-size: 15px;
`;

const TopSection = styled.View`
  background-color: #273248;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: flex-start;
`;

const Receive = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const ReceiveAdrsWrap = styled.View`
  width: 80%;
`;

const ReceiveAdrs = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 15px;
`;

const BodySection = styled.View`
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
`;

const GuideWrap = styled.View`
  background-color: #1b212c;
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  border-color: #323741;
  border-width: 1px;
`;

const Guide = styled.Text`
  color: #ffffff;
  font-size: 13px;
  opacity: 0.5;
`;

const ReceiveScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="light-content" translucent={false} />
      <Container>
        <Header />

        <TopSection>
          <TopTitleWrap>
            <ReceiveTitle>Receive</ReceiveTitle>
            <CancelBtn>
              <Cancel>Cancel</Cancel>
            </CancelBtn>
          </TopTitleWrap>

          <ReceiveWrap>
            <ReceiveBox>
              <Receive>
                <ReceiveAdrsWrap>
                  <ReceiveAdrs>
                    0x25d5DC5C5f5321d98b0fF859B8e133286A6312cd
                  </ReceiveAdrs>
                </ReceiveAdrsWrap>
              </Receive>
              <QrImgWrap>
                <QrImg source={assets.qr} style={{ resizeMode: "cover" }} />
              </QrImgWrap>
            </ReceiveBox>
            <BtnBox>
              <Btn onPress={() => navigation.navigate("main")}>
                <BtnName>Copy my adress</BtnName>
              </Btn>
            </BtnBox>
          </ReceiveWrap>
        </TopSection>

        <BodySection>
          <GuideWrap>
            <Guide>
              {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining`}
            </Guide>
          </GuideWrap>
        </BodySection>
      </Container>
    </>
  );
};

export default ReceiveScreen;

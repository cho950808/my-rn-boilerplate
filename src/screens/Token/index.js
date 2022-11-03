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

const Tokenbox = styled.View`
  margin-top: 20px;
`;

const TokenBtn = styled.Pressable`
  color: #ffffff;
  background-color: #273248;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  border: #808080;
  border-width: 1px;
  margin-top: 5px;
  padding: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

const Section = styled.View`
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const AddBtn = styled.Pressable`
  justify-content: center;
  align-items: center;
  background-color: #fc7643;
  font-size: 15px;
  font-weight: bold;
  border-radius: 10px;
  font-weight: bold;
  margin-right: 15px;
  margin-left: 15px;
  width: 35%;
`;

const AddText = styled.Text`
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 15px;
  color: #ffffff;
`;

const TokentScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="light-content" translucent={false} />
      <Container>
        <HeaderWrap onPress={() => navigation.goBack()}>
          <HeaderBox>
            <BackImg source={assets.back} />
            <BackText>Network</BackText>
          </HeaderBox>
        </HeaderWrap>

        <Section>
          <Tokenbox>
            <TokenBtn>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={assets.polygon}
                  style={{ height: 40, width: 40 }}
                />
                <View
                  style={{
                    marginLeft: 10,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#20C292",
                      height: 10,
                      width: 10,
                      borderRadius: 20,
                    }}
                  />
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: 15,
                      marginLeft: 8,
                      fontWeight: "bold",
                    }}
                  >
                    Polygon mainnet
                  </Text>
                </View>
              </View>
              <View>
                <Image
                  source={assets.gray_check}
                  style={{ tintColor: "#808080" }}
                />
              </View>
            </TokenBtn>
          </Tokenbox>
        </Section>

        <View
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          <AddBtn onPress={() => navigation.navigate("network")}>
            <AddText>
              Add network <Text style={{ fontSize: 16 }}>+</Text>
            </AddText>
          </AddBtn>
        </View>
      </Container>
    </>
  );
};

export default TokentScreen;

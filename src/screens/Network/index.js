import React, { useRef, useState } from "react";
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
import AlertModal from "../../components/modal/AlertModal";
import network_data from "../../tmp/network_data";

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
  border: ${({ focused }) => (focused ? `#ffffff` : `#808080`)};
  border-width: 1px;
  margin-top: 5px;
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

const Section = styled.ScrollView`
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const NetworkBox = styled.View`
  margin-top: 5px;
`;

const NetworkBtn = styled.Pressable`
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

const TabWrap = styled.View`
  flex-direction: row;
  width: 100%;
  background-color: #273248;
`;

const Tab = styled.Pressable`
  width: 50%;
  justify-content: center;
  border-bottom-color: ${({ method }) => (method ? `#fc7643` : `#808080`)};
  border-bottom-width: 1px;
`;

const TabName = styled.Text`
  color: ${({ method }) => (method ? `#ffffff` : `#808080`)};
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: bold;
`;

const WordText = styled.Text`
  color: #ffffff;
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
  margin-top: 20px;
  margin-bottom: 25px;
`;

const BtnName = styled.Text`
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  color: #ffffff;
`;

const NetworkScreen = ({ navigation }) => {
  const [method, setMethod] = useState("Popular");
  const [visible, setVisible] = useState(false);
  const [focused, setFocused] = useState({ focus: false, idx: 0 });

  const onPopularClick = () => {
    setMethod("Popular");
  };

  const onCustomClick = () => {
    setMethod("Custom");
  };

  const toggleModal = () => {
    setVisible(!visible);
  };

  // const focuse = () => {
  //   for(let i = 0; i<inputRef.current.length-4; i++) {
  //     if(inputRef.current[i]) {

  //     }
  //   }
  // }

  // console.log(inputRef.current[0]);

  return (
    <>
      <StatusBar barStyle="light-content" translucent={false} />
      <AlertModal visible={visible} setVisible={setVisible} />
      <Container>
        <HeaderWrap onPress={() => navigation.goBack()}>
          <HeaderBox>
            <BackImg source={assets.back} />
            <BackText>Add network</BackText>
          </HeaderBox>
          <Cancel onPress={() => navigation.navigate("main")}>
            <CancelText>Cancel</CancelText>
          </Cancel>
        </HeaderWrap>

        <TabWrap>
          <Tab onPress={onPopularClick} method={method === "Popular"}>
            <TabName method={method === "Popular"}>Popular</TabName>
          </Tab>
          <Tab onPress={onCustomClick} method={method === "Custom"}>
            <TabName method={method === "Custom"}>Custom networks</TabName>
          </Tab>
        </TabWrap>

        {method === "Popular" && (
          <Section>
            {network_data.map((item, index) => (
              <NetworkBox key={`network_${index}`}>
                <NetworkBtn>
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={item.assets}
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
                        {item.name} mainnet
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Image
                      source={assets.gray_check}
                      style={{ tintColor: "#808080" }}
                    />
                  </View>
                </NetworkBtn>
              </NetworkBox>
            ))}
          </Section>
        )}

        {method === "Custom" && (
          <Section>
            <Wordbox>
              <WordText>Network name</WordText>
              <WordInput
                placeholderTextColor="#ffffff"
                placeholder="Enter network name"
                returnKeyType="next"
                style={{ paddingLeft: 15 }}
                onFocus={() => setFocused({ focus: true, idx: 0 })}
                onBlur={() => setFocused({ focus: false, idx: 0 })}
                focused={focused.focus && focused.idx === 0}
                // onSubmitEditing={() => about_ref.current.focus()}
                // blurOnSubmit={false}
              />
            </Wordbox>

            <Wordbox>
              <WordText>RPC URL</WordText>
              <WordInput
                placeholderTextColor="#ffffff"
                placeholder="Enter RPC URL"
                returnKeyType="next"
                style={{ paddingLeft: 15 }}
                onFocus={() => setFocused({ focus: true, idx: 1 })}
                onBlur={() => setFocused({ focus: false, idx: 1 })}
                focused={focused.focus && focused.idx === 1}
                // onSubmitEditing={() => about_ref.current.focus()}
                // blurOnSubmit={false}
              />
            </Wordbox>

            <Wordbox>
              <WordText>Chain ID</WordText>
              <WordInput
                placeholderTextColor="#ffffff"
                placeholder="Enter chain ID"
                returnKeyType="next"
                style={{ paddingLeft: 15 }}
                onFocus={() => setFocused({ focus: true, idx: 2 })}
                onBlur={() => setFocused({ focus: false, idx: 2 })}
                focused={focused.focus && focused.idx === 2}
                // onSubmitEditing={() => about_ref.current.focus()}
                // blurOnSubmit={false}
              />
            </Wordbox>

            <Wordbox>
              <WordText>Currency symbol</WordText>
              <WordInput
                placeholderTextColor="#ffffff"
                placeholder="Upload currency symbol"
                returnKeyType="next"
                style={{ paddingLeft: 15 }}
                onFocus={() => setFocused({ focus: true, idx: 3 })}
                onBlur={() => setFocused({ focus: false, idx: 3 })}
                focused={focused.focus && focused.idx === 3}
                // onSubmitEditing={() => about_ref.current.focus()}
                // blurOnSubmit={false}
              />
            </Wordbox>

            <Wordbox>
              <WordText>Block explorer URL</WordText>
              <WordInput
                placeholderTextColor="#ffffff"
                placeholder="Enter block explorer URL"
                returnKeyType="next"
                style={{ paddingLeft: 15 }}
                onFocus={() => setFocused({ focus: true, idx: 4 })}
                onBlur={() => setFocused({ focus: false, idx: 4 })}
                focused={focused.focus && focused.idx === 4}
                // onSubmitEditing={() => about_ref.current.focus()}
                // blurOnSubmit={false}
              />
            </Wordbox>

            <Btn onPress={toggleModal}>
              <BtnName>Create</BtnName>
            </Btn>
          </Section>
        )}
      </Container>
    </>
  );
};

export default NetworkScreen;

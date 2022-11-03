import React, { useState } from "react";
import {
  Text,
  StatusBar,
  View,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import act_data from "../../tmp/act_data";
import token_data from "../../tmp/token_data";

import styled from "styled-components/native";
import assets from "../../../assets";
import Header from "../../components/Header";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #141a26;
  flex-direction: column;
`;

const CreateBtn = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fc7643;
  font-size: 15px;
  font-weight: bold;
  border-radius: 15px;
  font-weight: bold;
  border: #fbaf93;
  border-width: 1px;
  margin-right: 15px;
  margin-left: 15px;
  opacity: ${({ item }) => (item ? 1 : 0.4)};
`;

const ActionImage = styled.Image`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 15px;
  margin-right: 15px;
  height: 25px;
  width: 25px;
`;

const NftImgViw = styled.View`
  width: 50px;
  height: 50px;
  border-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
`;

const NftImg = styled.Image`
  width: 100%;
  height: 100%;
`;

const ChannelList = styled.FlatList``;

const ChannelBtn = styled.Pressable`
  flex: 1;
`;

const ChannelItem = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  padding: 20px;
  flex: 1;
`;

const ChannelWrap = styled.View`
  justify-content: flex-start;
  flex-direction: row;
  flex: 0.8;
  width: 100%;
`;

const ChannelNum = styled.View`
  justify-content: center;
  margin-right: 15px;
`;

const ChannelName = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

const ChannelPriceView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 3px;
`;

const PriceMidText = styled.Text`
  color: #5fc88f;
  align-items: center;
`;

const ChannelMid = styled.View`
  flex-direction: column;
  /* background-color: #123123; */
  width: 63%;
  justify-content: center;
  /* flex: 1; */
`;

const ChannelRight = styled.View`
  flex: 0.2;
  flex-direction: column;
  align-items: center;
  /* right: 0; */
  justify-content: center;
  /* width: *; */
  /* background-color: #723632; */
`;

const PriceRightText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

const AddBtn = styled.Pressable`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #313131;
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
  font-weight: bold;
  font-size: 15px;
  color: #ffffff;
`;

const TabWrap = styled.View`
  flex-direction: row;
  width: 100%;
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

const TokenWrap = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Token = styled.Text`
  color: #808080;
  font-size: 14px;
  font-weight: bold;
`;

const TokenPrice = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 35px;
`;

const ActName = styled.Text`
  color: #ffffff;
  margin-top: 4px;
  opacity: ${({ item }) => (item ? 1 : 0.4)};
`;

const MainScreen = ({ navigation }) => {
  const [method, setMethod] = useState("Tokens");

  const onTokensClick = () => {
    setMethod("Tokens");
  };

  const onActClick = () => {
    setMethod("Activity");
  };

  return (
    <>
      <StatusBar barStyle="light-content" translucent={false} />
      <Container>
        <Header />
        <ChannelList
          bounces={false}
          data={token_data}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          ListHeaderComponent={
            <View
              style={{
                flex: 0.5,
                backgroundColor: "#273248",
              }}
            >
              <View style={{ flex: 1, paddingHorizontal: 15 }}>
                <View
                  style={{
                    backgroundColor: "#141A25",
                    width: "100%",
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      paddingHorizontal: 13,
                      paddingVertical: 15,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
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
                          fontSize: 14,
                          marginLeft: 8,
                          fontWeight: "bold",
                        }}
                      >
                        Account 01
                      </Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          color: "#808080",
                          fontWeight: "bold",
                          marginRight: 5,
                        }}
                      >
                        0x2...5hh508
                      </Text>
                      <Image
                        source={assets.copy}
                        style={{
                          width: 15,
                          height: 15,
                          tintColor: "#808080",
                        }}
                      />
                      <Image
                        source={assets.more}
                        style={{ marginLeft: 25, width: 15, height: 15 }}
                      />
                    </View>
                  </View>
                </View>
              </View>

              <TokenWrap>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 25,
                  }}
                >
                  <Token>Near</Token>
                  <TokenPrice>2,6927.29</TokenPrice>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginVertical: 15,
                  }}
                >
                  {act_data.map((item, index) => (
                    <Pressable
                      style={{ alignItems: "center" }}
                      key={`act_${index}`}
                      onPress={() => {
                        if (item.id < 3) navigation.navigate(item.stack_name);
                      }}
                    >
                      <CreateBtn item={item.id < 3}>
                        <ActionImage source={item.assets} />
                      </CreateBtn>
                      <ActName item={item.id < 3}>{item.act_name}</ActName>
                    </Pressable>
                  ))}
                </View>
              </TokenWrap>

              <TabWrap>
                <Tab onPress={onTokensClick} method={method === "Tokens"}>
                  <TabName method={method === "Tokens"}>Tokens</TabName>
                </Tab>
                <Tab onPress={onActClick} method={method === "Activity"}>
                  <TabName method={method === "Activity"}>Activity</TabName>
                </Tab>
              </TabWrap>
            </View>
          }
          renderItem={({ item }) => (
            <ChannelBtn>
              {method === "Tokens" && (
                <ChannelItem>
                  <ChannelWrap>
                    <ChannelNum>
                      <NftImgViw>
                        <NftImg
                          source={item.nft_image}
                          style={{ resizeMode: "cover" }}
                        />
                      </NftImgViw>
                    </ChannelNum>

                    <ChannelMid>
                      <ChannelName numberOfLines={5} ellipsizeMode="tail">
                        {item.token_name}
                      </ChannelName>
                      <ChannelPriceView>
                        <Text style={{ color: "#808080" }}>${item.price}</Text>
                        <Image
                          source={assets.up}
                          style={{ marginHorizontal: 4 }}
                        />
                        <PriceMidText>{item.percent}%</PriceMidText>
                      </ChannelPriceView>
                    </ChannelMid>
                  </ChannelWrap>

                  <ChannelRight>
                    <PriceRightText>{item.quantity}</PriceRightText>
                    <Text style={{ color: "#808080" }}>
                      ${item.price_total}
                    </Text>
                  </ChannelRight>
                </ChannelItem>
              )}

              {method === "Activity" && (
                <ChannelItem>
                  <ChannelWrap>
                    <ChannelNum>
                      <NftImgViw>
                        <NftImg
                          source={item.nft_image}
                          style={{ resizeMode: "cover" }}
                        />
                      </NftImgViw>
                    </ChannelNum>

                    <ChannelMid>
                      <ChannelName numberOfLines={5} ellipsizeMode="tail">
                        {item.token_name}
                      </ChannelName>
                      <ChannelPriceView>
                        <Text style={{ color: "#808080" }}>${item.price}</Text>
                        <Image
                          source={assets.up}
                          style={{ marginHorizontal: 4 }}
                        />
                        <PriceMidText>{item.percent}%</PriceMidText>
                      </ChannelPriceView>
                    </ChannelMid>
                  </ChannelWrap>

                  <ChannelRight>
                    <PriceRightText>{item.quantity}</PriceRightText>
                    <Text style={{ color: "#808080" }}>
                      ${item.price_total}
                    </Text>
                  </ChannelRight>
                </ChannelItem>
              )}
            </ChannelBtn>
          )}
          ListFooterComponent={
            <View
              style={{
                width: "100%",
                alignItems: "center",
                marginBottom: 40,
              }}
            >
              <AddBtn onPress={() => navigation.navigate("token")}>
                <AddText>
                  Add Token <Text style={{ fontSize: 16 }}>+</Text>
                </AddText>
              </AddBtn>
            </View>
          }
        />
      </Container>
    </>
  );
};

export default MainScreen;

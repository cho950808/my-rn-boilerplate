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

const BoxWrap = styled.View`
  margin-top: 20px;
`;

const Box = styled.TextInput`
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
  right: 0px;
  left: 0px;
  z-index: 1;
  margin-bottom: 15px;
  margin-left: 15px;
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

const HeaderWrap = styled.View`
  padding: 30px;
  background-color: #273248;
  justify-content: space-between;
  flex-direction: row;
`;

const HeaderBox = styled.Pressable`
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
  flex: 1;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const BoxTitle = styled.Text`
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

const CopyBtn = styled.Pressable`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 15px;
  font-weight: bold;
  border-radius: 10px;
  font-weight: bold;
  width: 100%;
  border: #fc7643;
  border-width: 1px;
  margin-top: 10px;
`;

const CopyName = styled.Text`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  color: #fc7643;
`;

const Copy = styled.Image`
  margin-left: 10px;
  width: 20px;
  height: 20px;
`;

const WordBox = styled.View`
  background-color: #2b313b;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 10px;
  border-color: #808080;
  border-width: 1px;
  margin-top: 5px;
`;

const Words = styled.Text`
  color: #ffffff;
  font-size: 15px;
`;

const GuideBox = styled.View`
  background-color: #2b2b27;
  margin-bottom: 20px;
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  border-color: #d3cb9a;
  border-width: 1px;
`;

const Guide = styled.Text`
  color: #ffffff;
  font-size: 14px;
`;

const Header = (props) => {
  const { navigation, step, setStep } = props;

  const navi = () => {
    if (step === 1) {
      navigation.navigate("intro");
    } else if (step === 2) {
      setStep(1);
    } else if (step === 3) {
      setStep(2);
    }
  };

  return (
    <HeaderWrap>
      <HeaderBox onPress={navi}>
        <BackImg source={assets.back} />
        <BackText>Backup words</BackText>
      </HeaderBox>
      <Cancel onPress={() => navigation.popToTop()}>
        <CancelText>Cancel</CancelText>
      </Cancel>
    </HeaderWrap>
  );
};

const CreateWalletPwd = (props) => {
  const { step, setStep } = props;

  return (
    <>
      <Section>
        <View>
          <BoxWrap>
            <BoxTitle>Password : </BoxTitle>
            <Box
              placeholderTextColor="#ffffff"
              placeholder="Enter your password"
              returnKeyType="next"
              style={{ paddingLeft: 15 }}
              // onSubmitEditing={() => about_ref.current.focus()}
              // blurOnSubmit={false}
            />
          </BoxWrap>

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
        </View>

        <View>
          <BoxWrap>
            <BoxTitle>Check password : </BoxTitle>
            <Box
              placeholderTextColor="#ffffff"
              placeholder="Enter your password"
              returnKeyType="done"
              style={{ paddingLeft: 15 }}
              // onSubmitEditing={() => about_ref.current.focus()}
              // blurOnSubmit={false}
            />
          </BoxWrap>
        </View>

        <BtnBox>
          <Btn onPress={() => setStep(2)}>
            <BtnName>Next</BtnName>
          </Btn>
        </BtnBox>
      </Section>
    </>
  );
};

const BackUpWallet = (props) => {
  const { step, setStep } = props;

  return (
    <>
      <Section>
        <BoxWrap>
          <BoxTitle>Backup words : </BoxTitle>
          <WordBox>
            <Words>
              unit / hurt / bee / mirror / style / license represent / restless
              / blow / pray
            </Words>
          </WordBox>

          <CopyBtn>
            <CopyName>Copy backUp Words</CopyName>
            <Copy source={assets.copy} />
          </CopyBtn>
        </BoxWrap>

        <BtnBox>
          <GuideBox>
            <Guide>
              {`Secret backup syntax makes it easy to back up and restore your account.\n\nNever disclose your backup statements. Anyone with this phrase can rob your wallet`}
            </Guide>
          </GuideBox>
          <Btn onPress={() => setStep(3)}>
            <BtnName>Next</BtnName>
          </Btn>
        </BtnBox>
      </Section>
    </>
  );
};

const BackUpConfirm = (props) => {
  const { navigation, step, setStep } = props;
  return (
    <>
      <Section>
        <BoxWrap>
          <BoxTitle>
            {`Please select each backup words\nin order to make sure it’s correct`}
          </BoxTitle>

          <CopyBtn>
            <CopyName>unit / hurt / bee</CopyName>
          </CopyBtn>
        </BoxWrap>

        <BtnBox>
          <Btn onPress={() => navigation.navigate("created")}>
            <BtnName>Next</BtnName>
          </Btn>
        </BtnBox>
      </Section>
    </>
  );
};

const CreateWallet = ({ navigation }) => {
  const [step, setStep] = useState(1);

  return (
    <>
      <StatusBar barStyle="light-content" translucent={false} />
      <Container>
        <Header step={step} setStep={setStep} navigation={navigation} />
        {step === 1 && <CreateWalletPwd step={step} setStep={setStep} />}
        {step === 2 && <BackUpWallet setStep={setStep} />}
        {step === 3 && (
          <BackUpConfirm setStep={setStep} navigation={navigation} />
        )}
      </Container>
    </>
  );
};

export default CreateWallet;

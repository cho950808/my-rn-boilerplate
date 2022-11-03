import React, { useEffect, useState } from "react";
import Modal from "react-native-modal";
import assets from "../../../assets";
import styled from "styled-components/native";

const ModalBtn = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #fc7643;
  font-size: 15px;
  font-weight: bold;
  border-radius: 7px;
  font-weight: bold;
  width: 100%;
  margin-top: 10px;
`;

const ModalText = styled.Text`
  color: #ffffff;
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  width: 100%;
`;

const ModalContent = styled.View``;

const ModalBox = styled.View`
  background-color: #273248;
  justify-content: center;
  align-items: flex-start;
  border-radius: 10px;
`;

const ModalTitle = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
  width: 100%;
`;

const ModalMessageBox = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const ModalMessage = styled.Text`
  color: #808080;
  font-size: 13px;
  width: 100%;
`;

const ModalWrap = styled.View`
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 15px;
  margin-right: 15px;
`;

const NetworkBox = styled.View`
  margin-top: 5px;
`;

const NetworkBtn = styled.Pressable`
  color: #ffffff;
  background-color: #141a25;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  margin-top: 5px;
  padding: 10px;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

const CancelBtn = styled.Pressable`
  flex-direction: row;
  width: 100%;
  /* background-color: #123123; */
`;

const Cancel = styled.Text`
  color: #808080;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 10px;
  text-align: center;
`;

const NetworkImg = styled.Image`
  height: 40px;
  width: 40px;
`;

const NetWorkWrap = styled.View`
  margin-left: 3px;
  flex-direction: row;
  align-items: center;
`;

const Network = styled.Text`
  color: #ffffff;
  font-size: 15px;
  margin-left: 8px;
  font-weight: bold;
`;

const BoxWrap = styled.View`
  flex-direction: row;
  width: 100%;
`;

const AlertModal = (props) => {
  const { visible, setVisible } = props;

  return (
    <Modal
      animationIn={"slideInDown"}
      isVisible={visible}
      backdropTransitionInTiming={500}
      backdropTransitionOutTiming={3000}
      useNativeDriverForBackdrop
    >
      <ModalContent>
        <ModalBox>
          <ModalWrap>
            <BoxWrap>
              <ModalTitle>Add this network?</ModalTitle>
            </BoxWrap>

            <NetworkBox>
              <NetworkBtn>
                <BoxWrap>
                  <NetworkImg source={assets.bnb} />
                  <NetWorkWrap>
                    <Network>BNB mainnet</Network>
                  </NetWorkWrap>
                </BoxWrap>
              </NetworkBtn>
            </NetworkBox>

            <ModalMessageBox>
              <ModalMessage>
                {`Display name: BNB mainnet\nChain ID: 56\nNetwork URL : https://bsc-dataseed1.binance.org\nDisplay name: BNB mainnet\nChain ID: 56\nNetwork URL : https://bsc-dataseed1.binance.orgDisplay\nname: BNB mainnet\nChain ID: 56\nNetwork URL : https://bsc-dataseed1.binance.org`}
              </ModalMessage>
            </ModalMessageBox>

            <ModalBtn onPress={() => setVisible(!visible)}>
              <ModalText>Confirm</ModalText>
            </ModalBtn>

            <CancelBtn onPress={() => setVisible(false)}>
              <Cancel>Cancel</Cancel>
            </CancelBtn>
          </ModalWrap>
        </ModalBox>
      </ModalContent>
    </Modal>
  );
};

export default AlertModal;

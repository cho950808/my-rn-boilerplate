import React from "react";
import styled from "styled-components/native";

import assets from "../../assets";

const HeaderWrap = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: space-between;
  flex-direction: row;
  background-color: transparent;
  align-items: center;
  background-color: #273248;
  left: 0px;
  top: 0px;
  right: 0px;
`;

const LogoImg = styled.Image`
  width: 30%;
  height: 100%;
`;

const NetWork = styled.View`
  background-color: #141a25;
  border-radius: 10px;
  flex-direction: row;
`;

const NetWorkWrap = styled.View`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  flex-direction: row;
  align-items: center;
`;

const NetWorkScore = styled.View`
  background-color: #20c292;
  height: 10px;
  width: 10px;
  border-radius: 20px;
`;

const NetWorkName = styled.Text`
  color: #ffffff;
  font-size: 13px;
  margin-left: 8px;
`;

const HeaderContent = () => {
  return (
    <HeaderWrap>
      <LogoImg source={assets.logo} style={{ resizeMode: "contain" }} />
      <NetWork>
        <NetWorkWrap>
          <NetWorkScore />
          <NetWorkName>Main network</NetWorkName>
        </NetWorkWrap>
      </NetWork>
    </HeaderWrap>
  );
};

export default HeaderContent;

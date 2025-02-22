import styled, { css } from 'styled-components';

import { Section } from '../Overlay/style';
import { centerIcon } from '~/shared/mixins';

export const Sections = styled.div`
  margin-left: 300px;
  width: calc(100% - 300px);
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const Image = styled.img`
  margin-right: 5px
`;

export const Title = styled.h1`
  font-weight: 100
  font-family: 'Google Sans';
  display: flex;
`;

export const Subtitle = styled.h1`
  font-weight: 100
  font-family: 'Roboto';
`;

export const Icon = styled.div`
  height: 40px;
  width: 40px;
  opacity: 1;
  filter: invert(100%);
  margin-right: 10px;
  ${centerIcon(40)};
`;

export const TitleEmail = styled.h1`
  font-weight: 100

  ${({ visible }: { visible: boolean; }) => css`
    display: ${visible ? 'none' : 'block'};
  `};  
`;

export const Buttons = styled.div`
  float: right;
`;

export const FakeSelect = styled.div`
  padding: 10px;
`;

export const Button = styled.a`
  
`;

export const ExtLink = styled.a`

  border: 1px #42424252 solid;
  transition: background-color 0.3s;
  border-radius: 30px;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 5px

  &:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }
`;

export const A = styled.a`
  &:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }
`;

export const DialogPopup = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12);
  display: flex;
  max-height: calc(100% - 96px);
  flex-direction: column;
  margin: 48px;
  position: relative;
  overflow-y: auto;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 200px;
  width: 500px;
  z-index: 9999;
`;

export const DialogBackground = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 999%;
  width: 999%;
  background-color: #00000078;
  z-index: 100;
`;

export const AboutWrapper = styled.div`

`;

export const InputField = styled.input`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 17px;
  font-family: Roboto;
  width: 82%

  &:focus {
    outline: none !important;
  }
`;

export const NavDILine_Profile = styled.div`
  background: #fffff;
  height: 16px;
  width: 3px;
  margin-inline-end: -4px;
  position: relative;
  border-radius: 2px;
  margin-top: 7px;
  margin-inline-start: 1px;
`;

export const SettingsSection = styled.div`
  padding: 24px;
  background-color: rgba(255,255,255,0.08);
  margin-bottom: 24px;
  border-radius: 30px;
  color: white;
  overflow: hidden;
  padding: 8px 0px;
  margin-top: 48px;
  box-shadow: 5px 5px 33px 10px rgba(0,0,0,0.21)
`;

export const ListItem = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 24px;
  height: 48px;
  background-color: transparent;
`;

export const StyledNavigationDrawerItem = styled.div`
  padding: 0 16px;
  margin-left: 32px;
  margin-right: 32px;
  display: flex;
  height: 42px;
  align-items: center;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }
`;

export const SettingsItem = styled.a`
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 24px;
  height: 42px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.06);
  position: relative;
  
`;

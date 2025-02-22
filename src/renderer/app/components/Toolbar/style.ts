import styled, { css } from 'styled-components';
import { platform } from 'os';

import { TOOLBAR_HEIGHT } from '~/renderer/app/constants/design';

export const StyledToolbar = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-flow: row;
  align-items: center;
  color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: ${TOOLBAR_HEIGHT}px;
  -webkit-app-region: drag;
  padding-right: ${platform() !== 'darwin' ? 138 : 0}px;
  transition: 0.3s margin-top 0.2s, 0.2s background-color 0s;

  ${({ isHTMLFullscreen, isDisabled }: { isHTMLFullscreen: boolean; isDisabled: boolean }) => css`
    margin-top: ${isHTMLFullscreen ? -TOOLBAR_HEIGHT : 0}px;
    background-color: ${isDisabled ? '#000000e8' : '#353535'}
  `};
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

export const ToolbarWrap = styled.div`
  display: contents;

  ${({ isDisabled }: { isDisabled: boolean }) => css`
    visibility: ${isDisabled ? '' : 'hidden'};
  `};
`;

export const Separator = styled.div`
  height: 16px;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.12);
  margin-left: 8px;
  margin-right: 8px;
`;

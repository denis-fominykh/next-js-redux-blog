import styled from 'styled-components/macro';

export const ErrorWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const ErrorParagraph = styled.p`
  top: 50%;
  left: 50%;
  color: #0a1833;
  font-size: 34px;
  text-align: center;
  position: absolute;
  transform: translate(-50%, -50%);
`;

export const ErrorCode = styled.span`
  color: #7f0dd6;
`;

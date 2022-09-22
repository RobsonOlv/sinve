import styled from 'styled-components';

export const Container = styled.div`
  height: fit-content;
  padding-bottom: 40px !important;
`;

export const RegisterContainer = styled.div`

  height: 460px;
  width: 75%;
  margin: 0 auto !important;

  border-bottom: 2px solid black;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 34px;
  line-height: 51px;
  margin-top: 16px !important;
  color: ${(props) => props.theme.colors.pineTree};
`;

export const ProductContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  margin-top: 28px !important;
`;

export const TopProductContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  width: 100%;
`;
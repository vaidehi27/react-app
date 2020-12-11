import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  display: flex;
  padding: 2rem;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  color: black;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
`;

export const Description = styled.div`
  margin-top: 8px;
  color: grey;
  font-size: 14px;
  line-height: 18px;
  max-width: 330px;
  text-align: center;
`;

export const Children = styled.div`
  margin-top: 40px;
`;

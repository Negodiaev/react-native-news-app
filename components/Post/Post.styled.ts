import styled from "styled-components/native";

export const RootStyled = styled.View`
  flex-direction: row;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #e7e7e7;
  background-color: #fff;
`;

export const PostImageStyled = styled.Image`
  margin-right: 12px;
  width: 72px;
  height: 72px;
  border-radius: 12px;
`;

export const PostDetailsStyled = styled.View`
  flex: 1;
  justify-content: center;
`;

export const PostTitleStyled = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export const PostDateStyled = styled.Text`
  color: rgba(0, 0, 0, 0.5);
`;

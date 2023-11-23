import {
  RootStyled,
  PostImageStyled,
  PostDetailsStyled,
  PostTitleStyled,
  PostDateStyled,
} from "./Post.styled";

type TPostProps = { imgUrl: string; title: string; createdAt: string };

export const Post = ({ imgUrl, title, createdAt }: TPostProps) => {
  return (
    <RootStyled>
      <PostImageStyled source={{ uri: imgUrl }} />
      <PostDetailsStyled>
        <PostTitleStyled>{truncateTitle(title)}</PostTitleStyled>
        <PostDateStyled>
          {new Date(createdAt).toLocaleDateString()}
        </PostDateStyled>
      </PostDetailsStyled>
    </RootStyled>
  );
};

function truncateTitle(str: string): string {
  if (str.length >= 50) {
    return `${str.substring(0, 50)}...`;
  }

  return str;
}

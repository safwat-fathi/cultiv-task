import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledPost = styled.div`
  text-align: center;
  width: 80%;
  margin: 0 auto;
`;

const Content = styled.p`
  text-align: left;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 15px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Post = (props) => {
  const { author, title, content, createdAt, prev, next } = props;

  return (
    <StyledPost>
      <h3>{title}</h3>
      <p>
        By {author.name} on {createdAt}
      </p>
      <Content>{content}</Content>
      <StyledLink to={prev}>prev</StyledLink>
      <StyledLink to={next}>next</StyledLink>
      <hr />
    </StyledPost>
  );
};

export default Post;

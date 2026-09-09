import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Query($orderBy: AllRepositoriesOrderBy) {
    repositories(orderBy: $orderBy) {
      edges {
        node {
          id
          ownerAvatarUrl
          description
          fullName
          language
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`;

export const GET_REPOSITORY_BY_ID = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      fullName
      ratingAverage
      reviewCount
      forksCount
      stargazersCount
      description
      language
      ownerAvatarUrl
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;

export const ME = gql`
  query {
    me {
      username
      id
    }
  }
`;

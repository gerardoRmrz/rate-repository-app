import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Query(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int!
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
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
        cursor
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

export const GET_REPOSITORY_BY_ID = gql`
  query Repository($repositoryId: ID!, $first: Int, $after: String) {
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
      reviews(first: $first, after: $after) {
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
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`;

export const ME = gql`
  query me($includeReviews: Boolean = false, $first: Int, $after: String) {
    me {
      username
      id
      reviews(first: $first, after: $after) @include(if: $includeReviews) {
        edges {
          node {
            id
            createdAt
            rating
            text
            user {
              username
            }
            repository {
              id
              name
            }
          }
          cursor
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
        }
      }
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      username
      id
      reviews @include(if: $includeReviews) {
        edges {
          node {
            createdAt
            rating
            text
            user {
              name
            }
            repository {
              name
            }
          }
        }
      }
    }
  }
`;

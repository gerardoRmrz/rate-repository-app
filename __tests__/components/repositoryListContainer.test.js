import { render, screen, within } from "@testing-library/react-native";

import RepositoryListContainer from "../../src/components/RepositoryListContainer";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", async () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };

      await render(<RepositoryListContainer repositories={repositories} />);

      const [firstItem, secondItem] = screen.getAllByTestId("repository-item");
      const [firstImage, secondImage] =
        screen.getAllByTestId("repository-image");

      expect(firstItem).toBeVisible();
      expect(firstItem).toHaveTextContent(/jaredpalmer.formik/i);
      expect(firstImage.props.source.uri).toBe(
        "https://avatars2.githubusercontent.com/u/4060187?v=4",
      );

      ///////////////////////////////////
      expect(firstItem.props.children[1].props.children[0].props.name).toBe(
        "Stars",
      );
      expect(firstItem.props.children[1].props.children[0].props.value).toBe(
        21856,
      );
      expect(firstItem).toHaveTextContent(/21.9k/i);

      ////////////////////////////////////
      expect(firstItem.props.children[1].props.children[1].props.name).toBe(
        "Forks",
      );
      expect(firstItem.props.children[1].props.children[1].props.value).toBe(
        1619,
      );
      expect(firstItem).toHaveTextContent(/1.6k/i);
      ////////////////////////
      expect(firstItem.props.children[1].props.children[2].props.name).toBe(
        "Reviews",
      );
      expect(firstItem.props.children[1].props.children[2].props.value).toBe(3);
      ////////////////////////

      expect(firstItem.props.children[1].props.children[3].props.name).toBe(
        "Rating",
      );
      expect(firstItem.props.children[1].props.children[3].props.value).toBe(
        88,
      );

      ////////////////////////
      expect(secondItem).toHaveTextContent(/async-library\/react-async/i);
      expect(secondImage.props.source.uri).toBe(
        "https://avatars1.githubusercontent.com/u/54310907?v=4",
      );

      ///////////////////////////////////
      expect(secondItem.props.children[1].props.children[0].props.name).toBe(
        "Stars",
      );
      expect(secondItem.props.children[1].props.children[0].props.value).toBe(
        1760,
      );
      expect(secondItem).toHaveTextContent(/1.8k/i);

      ////////////////////////////////////
      expect(secondItem.props.children[1].props.children[1].props.name).toBe(
        "Forks",
      );
      expect(secondItem.props.children[1].props.children[1].props.value).toBe(
        69,
      );

      expect(secondItem).toHaveTextContent(/69Fork/i);
      ////////////////////////
      expect(secondItem.props.children[1].props.children[2].props.name).toBe(
        "Reviews",
      );
      expect(secondItem.props.children[1].props.children[2].props.value).toBe(
        3,
      );
      ////////////////////////

      expect(secondItem.props.children[1].props.children[3].props.name).toBe(
        "Rating",
      );
      expect(secondItem.props.children[1].props.children[3].props.value).toBe(
        72,
      );
    });
  });
});

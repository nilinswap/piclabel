import React from "react";
import { render } from "@testing-library/react";

import Game from "./Game";
import { GalleryProps } from "./Game.types";

describe("sample test suite", () => {
  let props: GalleryProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Game {...props} />);

  it("should render foo text", () => {
    props.foo = "sample text";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Game");

    expect(component).toHaveTextContent("sample text");
  });
});

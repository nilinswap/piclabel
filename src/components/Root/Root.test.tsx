import React from "react";
import { render } from "@testing-library/react";

import Root from "./Root";
import { RootProps } from "./Root.types";

describe("sample test suite", () => {
  let props: RootProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Root {...props} />);

  it("should render foo text", () => {
    props.foo = "sample text";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Root");

    expect(component).toHaveTextContent("sample text");
  });
});

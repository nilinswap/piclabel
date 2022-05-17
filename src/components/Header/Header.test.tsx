import React from "react";
import { render } from "@testing-library/react";

import Header from "./Header";
import { HeaderProps } from "./Header.types";

describe("sample test suite", () => {
  let props: HeaderProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Header {...props} />);

  it("should render foo text", () => {
    props.foo = "sample text";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Header");

    expect(component).toHaveTextContent("sample text");
  });
});

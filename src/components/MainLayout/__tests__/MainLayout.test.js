// MainLayout.test.js
// Test for MainLayout component

// External dependecies
import React from "react";
import { shallow } from "enzyme";

// Intenal dependencies
import MainLayout from "..";

describe("MainLayout", () => {
  const MOCKED_CHILDREN = <div data-test="children" />;

  it("Should renders Header", () => {
    const Component = shallow(<MainLayout>{MOCKED_CHILDREN}</MainLayout>);
    const header = Component.find('[data-test="header"]');
    expect(header.length).toBe(1);
  });

  it("Should renders children", () => {
    const Component = shallow(<MainLayout>{MOCKED_CHILDREN}</MainLayout>);
    const children = Component.find('[data-test="children"]');
    expect(children.length).toBe(1);
  });
});

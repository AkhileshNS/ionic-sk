import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";

test("renders ionic react", () => {
  const app = shallow(<App />);
  expect(app.find(".main").exists()).toBeTruthy();
});

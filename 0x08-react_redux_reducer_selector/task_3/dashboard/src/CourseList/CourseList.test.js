import React from "react";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

describe("CourseList component tests", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseList />);

    expect(wrapper.exists()).toBe(true);
  });

  it("renders 5 different rows", () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);

    expect(wrapper.find("thead").children()).toHaveLength(2);
    expect(wrapper.find("thead").childAt(0).dive().text()).toContain("Available courses");
    expect(wrapper.find("thead").childAt(1).dive().text()).toContain("Credit");

    expect(wrapper.find("tbody").children()).toHaveLength(3);
    expect(wrapper.find("tbody").childAt(0).dive().text()).toContain("ES6");
    expect(wrapper.find("tbody").childAt(0).dive().text()).toContain("60");
    expect(wrapper.find("tbody").childAt(1).dive().text()).toContain("Webpack");
    expect(wrapper.find("tbody").childAt(1).dive().text()).toContain("20");
    expect(wrapper.find("tbody").childAt(2).dive().text()).toContain("React");
    expect(wrapper.find("tbody").childAt(2).dive().text()).toContain("40");
  });

  it("renders correctly when passed a list of courses", () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);

    expect(wrapper.find("tbody").children()).toHaveLength(3);
    expect(wrapper.find("tbody").childAt(0).dive().text()).toContain("ES6");
    expect(wrapper.find("tbody").childAt(0).dive().text()).toContain("60");
    expect(wrapper.find("tbody").childAt(1).dive().text()).toContain("Webpack");
    expect(wrapper.find("tbody").childAt(1).dive().text()).toContain("20");
    expect(wrapper.find("tbody").childAt(2).dive().text()).toContain("React");
    expect(wrapper.find("tbody").childAt(2).dive().text()).toContain("40");
  });
});


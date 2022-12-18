import renderer from "react-test-renderer";
import { Hello } from "./";

describe("Hello", () => {
  it("Snap Shot", () => {
    const component = renderer.create(<Hello />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import Enzyme from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

/**
 *Factory function to create a shallowWrapper for App component
 * @function setup
 * @param  {object} - Components props specific to this setup
 * @return {ShallowWrapper}
 */

const setup = (props = {}) => {
  return shallow(<App {...props} />);
};

test("renders App component without errors", () => {
  const wrapper = setup();
  const appComponent = wrapper.find({ "data-test-id": "component-app" });

  expect(appComponent.length).toBe(1);
});

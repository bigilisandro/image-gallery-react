import Enzyme from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import ModalImage from ".";

Enzyme.configure({ adapter: new Adapter() });

const url = "https://images.unsplash.com/photo-1683914791767-764d03299719";
/**
 *Factory function to create a shallowWrapper for App component
 * @function setup
 * @param  {object} - Components props specific to this setup
 * @return {ShallowWrapper}
 */

const setup = (props = {}) => {
  return shallow(<ModalImage {...props} image={url} />);
};

describe("CardImage component", () => {
  it("should render without errors", () => {
    const wrapper = setup();
    const appComponent = wrapper.find({ "data-test-id": "modal-image" });
    expect(appComponent.length).toBe(1);
  });
});

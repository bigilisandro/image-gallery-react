import Enzyme from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import Pagination from ".";

Enzyme.configure({ adapter: new Adapter() });
/**
 *Factory function to create a shallowWrapper for App component
 * @function setup
 * @param  {object} - Components props specific to this setup
 * @return {ShallowWrapper}
 */

const setup = (props = {}) => {
  return shallow(
    <Pagination
      currentPage={0}
      endIndex={0}
      setCurrentPage={function (currentPage: number): void {
        throw new Error("Function not implemented.");
      }}
      res={[]}
      {...props}
    />,
  );
};

describe("Pagination component", () => {
  it("should render without errors", () => {
    const wrapper = setup();
    const appComponent = wrapper.find({
      "data-test-id": "pagination-component",
    });
    expect(appComponent.length).toBe(1);
  });
});

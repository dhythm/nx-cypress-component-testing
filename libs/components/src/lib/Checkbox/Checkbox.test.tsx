import renderer from 'react-test-renderer';
import { Checkbox } from './';

describe('Checkbox', () => {
  it('Snap Shot', () => {
    const component = renderer.create(<Checkbox label="confirm" isChecked />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

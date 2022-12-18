import renderer from 'react-test-renderer';
import { Button } from './';

describe('Button', () => {
  it('Snap Shot', () => {
    const component = renderer.create(<Button text="click me" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

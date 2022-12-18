import renderer from 'react-test-renderer';
import { ChakraProvider } from '@chakra-ui/react';
import { Checkbox } from './';

describe('Checkbox', () => {
  it('Snap Shot', () => {
    const component = renderer.create(
      <ChakraProvider>
        <Checkbox isChecked label="confirm" />
      </ChakraProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import renderer from 'react-test-renderer';
import { Button } from './';
import { ChakraProvider } from '@chakra-ui/react';

describe('Button', () => {
  it('Snap Shot', () => {
    const component = renderer.create(
      <ChakraProvider>
        <Button text="click me" />
      </ChakraProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

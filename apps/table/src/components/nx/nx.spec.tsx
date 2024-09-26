import { render } from '@testing-library/react';

import Nx from './nx-welcome';

describe('Nx', () => {
  it('should have a greeting as the title', () => {
    const { getByText } = render(<Nx />);
    expect(getByText(/Carefully crafted with/gi)).toBeTruthy();
  });
});

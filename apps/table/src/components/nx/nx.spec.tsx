import { render } from '@testing-library/react';

import { NxWelcome } from './nx-welcome';

describe('Nx', () => {
  it('should have a greeting as the title', () => {
    const { getByText } = render(<NxWelcome />);
    expect(getByText(/Carefully crafted with/gi)).toBeTruthy();
  });
});

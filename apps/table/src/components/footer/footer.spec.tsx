import { render } from '@testing-library/react';

import { Footer } from './footer';

describe('Footer', () => {
  it('should have a greeting as the title', () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/Carefully crafted with/gi)).toBeTruthy();
  });
});

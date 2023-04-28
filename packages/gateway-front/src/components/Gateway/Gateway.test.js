import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { doNothing } from 'utils';
import Gateway from './index';

describe('Test Gatevay component', () => {
  afterEach(cleanup);

  it('Try render', () => {
    const gateway = render(
      <Gateway
        name="Gateway Name"
        ip={0}
        onNameChange={doNothing}
        onIPChange={doNothing}
        onSave={doNothing}
      />
    );

    const [name, ip] = gateway.container.getElementsByTagName('input');

    expect(name.value).toBe('Gateway Name');

    expect(ip.value).toBe('0.0.0.0');
  });
});

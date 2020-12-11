import React, { FunctionComponent } from 'react';
import { ErrorLayout } from '../../components/ErrorLayout';

import { ErrorIcon } from './style';

const Forbidden: FunctionComponent = () => {
  return (
    <ErrorLayout
      title="You have no permission to access this page"
      description="Please, contact your manager to request an access to this module."
    >
      <ErrorIcon />
    </ErrorLayout>
  );
};

export default Forbidden;

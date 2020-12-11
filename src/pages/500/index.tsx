import React, { FunctionComponent } from 'react';
import { ErrorLayout } from '../../components/ErrorLayout';

const InternalError: FunctionComponent = () => {
  return <ErrorLayout title="Internal error" />;
};

export default InternalError;

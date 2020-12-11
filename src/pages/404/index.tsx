import React, { FunctionComponent } from 'react';
import { ErrorLayout } from '../../components/ErrorLayout';

const NotFound: FunctionComponent = () => {
  return <ErrorLayout title="Page not found" />;
};

export default NotFound;

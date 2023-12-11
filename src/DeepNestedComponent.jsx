
import React from 'react';
import { useAuth } from './AuthContext';

const DeepNestedComponent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <h2>Deep Nested Component</h2>
      <p>User is {isAuthenticated ? 'authenticated' : 'not authenticated'}</p>
    </div>
  );
};

export default DeepNestedComponent;

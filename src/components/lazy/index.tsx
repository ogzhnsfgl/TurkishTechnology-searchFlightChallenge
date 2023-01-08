import React, { Suspense } from 'react';
import Loading from '../loading';

export default function withSuspense<P>(
  Component: React.ComponentType & any,
  fallback?: React.ReactNode
) {
  return function WithSuspense(props: P) {
    return (
      <Suspense fallback={fallback ? fallback : <Loading />}>
        <Component {...props} />
      </Suspense>
    );
  };
}

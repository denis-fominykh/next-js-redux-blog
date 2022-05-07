import React, { Component, ErrorInfo, ReactNode } from 'react';

import { ErrorWrapper, ErrorParagraph } from 'components/ErrorBoundary/styled';

interface IProps {
  children: ReactNode;
}

interface IState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<IProps, IState> {
  public state: IState = {
    hasError: false,
  };

  public static getDerivedStateFromError(): IState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo);
  }

  render(): ReactNode | JSX.Element {
    if (this.state.hasError) {
      return (
        <ErrorWrapper>
          <ErrorParagraph>Sorry.. there was an error</ErrorParagraph>
        </ErrorWrapper>
      );
    }

    return this.props.children;
  }
}

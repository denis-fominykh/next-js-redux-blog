import type { NextPage, NextPageContext } from 'next';

import { ErrorCode, ErrorWrapper, ErrorParagraph } from 'components/ErrorBoundary/styled';

interface IErrorProps {
  statusCode?: number;
}

const Error: NextPage<IErrorProps> = ({ statusCode }) => {
  if (statusCode === 404) {
    return (
      <ErrorWrapper>
        <ErrorParagraph>
          <ErrorCode>{statusCode}</ErrorCode> | Page not Found
        </ErrorParagraph>
      </ErrorWrapper>
    );
  }

  return (
    <ErrorWrapper>
      {statusCode ? (
        <ErrorParagraph>
          An error <ErrorCode>{statusCode}</ErrorCode> occurred on server
        </ErrorParagraph>
      ) : (
        <ErrorParagraph>An error occurred on client</ErrorParagraph>
      )}
    </ErrorWrapper>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

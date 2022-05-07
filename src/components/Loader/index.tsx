import { LoaderWrap, LoaderPosition, LoaderSvg } from 'components/Loader/styled';

export function Loader(): JSX.Element {
  return (
    <LoaderWrap>
      <LoaderPosition>
        <LoaderSvg viewBox="0 0 50 50">
          <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
        </LoaderSvg>
      </LoaderPosition>
    </LoaderWrap>
  );
}

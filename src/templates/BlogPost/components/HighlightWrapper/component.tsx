import React, { FC, isValidElement } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

const HighlightWrapper: FC = ({ children }) => {
  if (!isValidElement(children)) {
    return null;
  }

  const className = children?.props.className || '';
  const matches = className.match(/language-(?<lang>.*)/);

  return (
    <Highlight
      {...defaultProps}
      code={children?.props.children}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ''
      }
    >
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre className={`snippet ${className}`}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={i} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default HighlightWrapper;

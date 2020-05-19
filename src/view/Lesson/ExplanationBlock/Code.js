/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
// import { PrismCode } from 'react-prism';

const CodeExample = (props) => {
  const { exampleCode } = props;
  return (
    <div>
      <Highlight {...defaultProps} code={exampleCode || ''} language='cpp'>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

CodeExample.propTypes = {
  exampleCode: PropTypes.string
};

CodeExample.propTypes = {
  exmapleCode: ''
};

export { CodeExample as default };

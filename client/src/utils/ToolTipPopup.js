import React from 'react';
import { Popup } from 'semantic-ui-react';

const ToolTipPopup = ({ content, children }) => {
  return <Popup inverted content={content} trigger={children} />;
};

export default ToolTipPopup;

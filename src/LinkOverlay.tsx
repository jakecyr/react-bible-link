import React from 'react'; // Add this line
import { Tooltip } from 'react-bootstrap';

export interface LinkOverlayProps {
  id: string;
  content: string;
}

export const LinkOverlay = ({ id, content }: LinkOverlayProps) => {
  return <Tooltip id={id}>{content}</Tooltip>;
};

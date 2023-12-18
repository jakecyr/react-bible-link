import React from 'react'; // Add this line
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Placement } from 'react-bootstrap/types';

export interface LinkWithTooltipProps {
  id?: string;
  children: any;
  href?: string;
  tooltip: string;
  onEnter?: () => void;
  delay?: number;
  placement?: Placement;
  linkStyles?: React.CSSProperties;
}

export const LinkWithTooltip: React.FC<LinkWithTooltipProps> = ({
  id,
  children,
  href,
  tooltip,
  onEnter,
  delay = 100,
  placement = 'top',
  linkStyles = { textDecoration: 'underline', color: 'blue', cursor: 'pointer' },
}) => {
  return (
    <OverlayTrigger
      onEnter={onEnter}
      overlay={<Tooltip id={id}>{tooltip}</Tooltip>}
      placement={placement}
      delay={delay}
    >
      <a style={linkStyles} href={href}>
        {children}
      </a>
    </OverlayTrigger>
  );
};

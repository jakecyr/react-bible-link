import React from 'react'; // Add this line
import { LinkWithTooltip } from './LinkWithTooltip';
import { useVerse } from './hooks/useVerse';

export interface BibleLinkProps {
  fullString: string;
}

export const BibleLink: React.FC<BibleLinkProps> = ({ fullString }) => {
  const { verse, loading, loadVerse } = useVerse({ verseText: fullString });

  return (
    <LinkWithTooltip onEnter={() => loadVerse()} tooltip={!verse && loading ? 'Loading...' : verse}>
      {fullString}
    </LinkWithTooltip>
  );
};

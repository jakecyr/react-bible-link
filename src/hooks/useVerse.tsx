import { useState } from 'react';

export interface VerseHookProps {
  verseText: string;
}

export const useVerse = ({ verseText }: VerseHookProps) => {
  const [verse, setVerse] = useState('');
  const [loading, setLoading] = useState(false);

  const loadVerse = async () => {
    if (verse || loading) {
      return;
    }

    setLoading(true);
    const [book, chapterVerse] = verseText.split(/\s/);
    const [chapter, verseNumber] = chapterVerse.split(':');

    try {
      const url = `https://bible-api.com/${encodeURIComponent(
        `${book} ${chapter}:${verseNumber}`,
      )}`;
      const results = await fetch(url);
      const jsonResults = await results.json();
      setVerse(jsonResults.text);
    } catch (e) {
      console.error('Error loading verse', e);
    } finally {
      setLoading(false);
    }
  };

  return {
    verse,
    loading,
    loadVerse,
  };
};

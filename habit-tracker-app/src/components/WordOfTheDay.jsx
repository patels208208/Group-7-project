import React, { useEffect, useState } from 'react';
import '../assets/styles/wordOfTheDay.css';

const WordOfTheDay = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchWordOfTheDay = async () => {
      try {
        const response = await fetch(`https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${process.env.REACT_APP_WORDNIK_API_KEY}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching the word of the day:', error);
      }
    };

    fetchWordOfTheDay();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const {word, definitions} = data;
  const definitionText = definitions && definitions.length > 0 ? definitions[0].text : 'No definition available';
  return (
    <div id="wordnik-wordofday">
      <h1>Word of the Day</h1>
      <span className="wordnik-word">
        <a href={`https://www.wordnik.com/words/${data.word}`}>{data.word}</a>
      </span>
      <span className="wordnik-word-partofspeech"> {data.definitions[0].partOfSpeech}</span>
      <br />
      <span className="wordnik-word-definition">{data.definitions[0].text}</span>
    </div>
  );
};

export default WordOfTheDay;
import React, { useEffect, useState } from 'react';
import '../assets/styles/wordOfTheDay.css';

const WordOfTheDay = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchWordOftheDay = async () => {
      try {
        console.log("hello")
        const response = await fetch("/api/wordOftheDay");
        console.log("bum")
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching the word of the day:', error);
      }
    };

    fetchWordOftheDay();
  }, []);

  if (!data) {
    return(
    <div>
      <h2>Word of the Day</h2>
      <p>Loading...</p>
      </div>
    )
  };

  return (
    <div id="wordnik-wordofday">
      
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
import React, { useEffect, useState } from 'react';

const WordOfTheDay = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchWordOftheDay = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/wordOftheDay");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching the word of the day:', error);
      }
    };

    fetchWordOftheDay();
  }, []);

  if (!data) {
    return (
      <div>
        <h2 className="pb-7 mt-4 text-briny-600 font-heading font-medium text-xl">Word of the Day</h2>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div id="wordnik-wordofday" className="pl-4 mt-0">
      <h2 className="pb-7 mt-4 text-briny-600 font-heading font-medium text-xl">Word of the Day</h2>
      <span className="font-extrabold text-lg italic">
        <a href={`https://www.wordnik.com/words/${data.word}`} className="text-inherit no-underline">
          {data.word}
        </a>
      </span>
      <span className="text-sm font-normal"> {data.definitions[0].partOfSpeech}</span>
      <br />
      <span className="text-base">{data.definitions[0].text}</span>
    </div>
  );
};

export default WordOfTheDay;
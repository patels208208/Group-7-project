import React, { useState, useEffect } from 'react';

const base_url = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/';

const apiGet = async queryString => {
  const response = await fetch(`${base_url}${queryString}?key=your-api-key`);
  const body = await response.json();
  return body
};

const getRandomWord = words => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};
const getWordDefinition = async word => {
  const response = await apiGet(word);
  return response[0].shortdef[0];
};
const WordOfTheDay = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  useEffect(() => {
  const fetchWordOfTheDay = async () => {
    const words = await apiGet('');
    const randomWord = getRandomWord(words);
    const wordDefinition = await getWordDefinition(randomWord);
    setWord(randomWord);
    setDefinition(wordDefinition);
  };

  fetchWordOfTheDay();
}, []);

return (
  <div>
    <h1>Word of the Day</h1>
    <h2>{word}</h2>
    <p>{definition}</p>
  </div>
);
};

export default WordOfTheDay;
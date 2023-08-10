import React, { useState } from 'react';
import { Translate } from '@google-cloud/translate';

const translate = new Translate({
  projectId: 'agile-tangent-394518', // Replace with your Google Cloud project ID
  keyFilename: 'path/to/your/keyfile.json', // Replace with the path to your JSON keyfile
});

function Translatee() {
  const [inputText, setInputText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = async () => {
    try {
      const [translation] = await translate.translate(inputText, selectedLanguage);
      setTranslatedText(translation);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  return (
    <div className="App">
      <h1>Text Translator</h1>
      <textarea
        placeholder="Enter text here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <div>
        <button onClick={() => setSelectedLanguage('hi')}>Translate to Hindi</button>
        <button onClick={() => setSelectedLanguage('pa')}>Translate to Punjabi</button>
        <button onClick={() => setSelectedLanguage('en')}>Revert to English</button>
        <button onClick={handleTranslate}>Translate</button>
      </div>
      <h2>Translated Text:</h2>
      <p>{translatedText}</p>
    </div>
  );
}

export default Translatee;

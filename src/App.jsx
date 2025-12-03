import { useState } from 'react';
import Flashcard from './flashcard';

export default function App() {
  const flashcards = [
    {pertanyaan: "Apa ibu kota Indonesia?", jawaban: "Jakarta"},
    {pertanyaan: "Siapa presiden pertama Indonesia?", jawaban: "Soekarno"},
    {pertanyaan: "Apa bahasa resmi di Indonesia?", jawaban: "Bahasa Indonesia"},
    {pertanyaan: "Berapa jumlah pulau di Indonesia?", jawaban: "Sekitar 17.000 pulau"},
    {pertanyaan: "Apa makanan tradisional Indonesia yang terkenal?", jawaban: "Nasi Goreng"},
  ];

  //nyimpen posisi falshcard
  const[currentIndex, setCurrentIndex] = useState(0);

  //nentuin flashcard lagi nampilin pertanyaan atau jawaban
  const [isFlipped, setIsFlipped] = useState(false);

  const progress = ((currentIndex + 1) / flashcards.length) * 100;

  function nextFlashcard() {
      if (currentIndex < flashcards.length - 1) {
          setCurrentIndex(currentIndex + 1);
          setIsFlipped(false);
      }
  }

  function prevFlashcard() {
      if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
          setIsFlipped(false);
      }
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Flashcards</h1>
        <p>By Reee</p>
      </div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: progress + "% "}}>{progress}%</div>
      </div>
      <span className="progress-count">
        {currentIndex + 1} of {flashcards.length}
      </span>

      <Flashcard
        pertanyaan={flashcards[currentIndex].pertanyaan}
        jawaban={flashcards[currentIndex].jawaban}
        isFlipped={isFlipped}
        handleFlip={() => setIsFlipped(!isFlipped)}
      />

      <div className="navigation-buttons">
        <button onClick={prevFlashcard} disabled={currentIndex === 0}>
          Sebelumnya
        </button>
        <button onClick={nextFlashcard} disabled={currentIndex === flashcards.length - 1}>
          Berikutnya
        </button>
      </div>
      
    </div>
  );
}










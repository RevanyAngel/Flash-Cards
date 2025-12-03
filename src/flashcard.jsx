import { useState } from "react";

export default function Flashcard({pertanyaan, jawaban, isFlipped, handleFlip}) {
  return (
    <div className={`flashcard ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
      {isFlipped ? (
        <div className="belakang">{jawaban}</div>
      ) : (
        <div className="depan">{pertanyaan}</div>
      )}
    </div>
  );
}



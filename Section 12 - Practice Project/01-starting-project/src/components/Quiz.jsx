import { useState, useCallback, useRef } from "react";

import QUESTIONS from '../questions.js';

import quizComepleteImg from '../assets/quiz-complete.png';
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

export default function Quiz() {
    const shuffledAnswers = useRef();

    const [answerState, setAnswerState] = useState('');
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;

    const quizComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setAnswerState('answered');
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });

        setTimeout(() => {
            if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnswerState('correct');
            } else {
                setAnswerState('wrong');
            }

            setTimeout(() => {
                setAnswerState('');
            }, 2000)
        }, 1000)
    }, [activeQuestionIndex]);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

    if  (quizComplete) {
        return(
            <div id="summary">
                <img src={quizComepleteImg} alt="trophy" />
                <h2>Quiz Complete!</h2>
            </div>
        )  
    }
    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex].answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    return (
    <div id="quiz">
        <div id="question">
            <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer} />
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <Answers answers={QUESTIONS[activeQuestionIndex].answers} selectedAnswer={userAnswers[userAnswers.length-1]} answersState={answerState} />
        </div>
    </div>);
};
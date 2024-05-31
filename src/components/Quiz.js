import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuestions, submitQuiz } from '../redux/actions';
import Question from './Question';
import Timer from './Timer';
import Result from './Result';

const sampleQuestions = [
  {
    id: 1,
    text: 'Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?',
    type: 'multiple',
    options: ['Insertion Sort', 'Quick Sort', 'Heap Sort', 'Merge sort'],
    correctAnswer: 'Merge sort',
  },
  {
    id: 2,
    text: 'Which of the following is used in React.js to increase performance?',
    type: 'dropdown',
    options: ['Virtual DOM', 'Original DOM', 'Both A and B', 'None of the above'],
    correctAnswer: 'Virtual DOM',
  },
  {
    id: 3,
    text: 'What is ReactJS?',
    type: 'text',
    options: ['Server-side framework', 'User interface framework', 'Both A and B', 'None of the above'],
    correctAnswer: 'User interface framework',
  },
  {
    id: 4,
    text: 'Identify the one which is used to pass data to components from outside',
    type: 'multiple',
    options: ['Render with arguments', 'setState', 'PropTypes', 'props'],
    correctAnswer: 'props',
  },
  {
    id: 5,
    text: 'In which language is React.js written?',
    type: 'text',
    options: ['Python', 'JavaScript', 'Java', 'PHP'],
    correctAnswer: 'JavaScript',
  },
  {
    id: 6,
    text: 'Identify the command used to create a react app.',
    type: 'multiple',
    options: ['npm install create-react-app', 'npm install -g create-react-app', 'install -g create-react-app', 'None of the above'],
    correctAnswer: 'npm install -g create-react-app',
  },
  {
    id: 7,
    text: 'A state in React.js is also known as?',
    type: 'text',
    options: ['The internal storage of the component', 'External storage of the component', 'Permanent storage', 'All of the above'],
    correctAnswer: 'The internal storage of the component',
  },
  {
    id: 8,
    text: 'State whether true or false: Props are methods into other components?',
    type: 'multiple',
    options: ['True', 'False'],
    correctAnswer: 'False',
  },
  {
    id: 9,
    text: 'In MVC, what does React.js act as?',
    type: 'text',
    options: ['Model', 'Controller', 'View', 'Middleware'],
    correctAnswer: 'View',
  },
  {
    id: 10,
    text: 'State whether true or false: React.js covers only the view layer of the app.',
    type: 'multiple',
    options: ['True', 'False'],
    correctAnswer: 'True',
  },
  {
    id: 11,
    text: 'Which of the following function is used to change the state of react component?',
    type: 'dropdown',
    options: ['this.setState()', 'this.state()', 'this.setChangeState()', 'None of the above'],
    correctAnswer: 'this.setState()',
  },
  {
    id: 12,
    text: 'Among the following which acts as the input of class-based component?',
    type: 'multiple',
    options: ['Factory', 'Render', 'Class', 'props'],
    correctAnswer: 'props',
  },
  {
    id: 13,
    text: 'JSX stands for ____ ',
    type: 'text',
    options: ['Javascript XML', 'JSON XML', 'JSON', 'Javascript and AngularJS'],
    correctAnswer: 'Javascript XML',
  },
  {
    id: 14,
    text: 'What is the default port where webpack-server runs?' ,
    type: 'dropdown',
    options: ['3000', '8080', '3030', '6060'],
    correctAnswer: '8080',
  },
  {
    id: 15,
    text: 'How many numbers of elements a valid react component can return?',
    type: 'text',
    options: ['1', '2', '4', '5'],
    correctAnswer: '1',
  },
  {
    id: 16,
    text: 'What is a state in React?',
    type: 'text',
    options: ['A permanent storage.', 'Internal storage of the component.', 'External storage of the component.', 'None of the above.'],
    correctAnswer: 'Internal storage of the component.',
  },
  {
    id: 17,
    text: 'Which of the following option is correct in the case of the Babel?',
    type: 'dropdown',
    options: ['Babel is a Compiler.', 'Babel is a Transpiler.', 'None of the above.', 'Both A and B are correct.'],
    correctAnswer: 'Both A and B are correct.',
  },
  {
    id: 18,
    text: 'What is true for the keys given to a list of elements in React?',
    type: 'dropdown',
    options: ['Unique in the DOM.', 'Unique among the siblings only.', 'Do not require to be unique.', 'None of the above.'],
    correctAnswer: 'Unique among the siblings only.',
  },
  {
    id: 19,
    text: 'What is React primarily used for?',
    type: 'text',
    options: ['Building mobile apps', 'Building user interfaces', 'Server-side processing', 'Data analysis'],
    correctAnswer: 'Building user interfaces',
  },
  {
    id: 20,
    text: 'Which feature of React allows it to efficiently update the UI?',
    type: 'multiple',
    options: ['Real DOM', 'Shadow DOM', 'Virtual DOM', 'Document Fragment'],
    correctAnswer: 'Virtual DOM',
  },
];


const Quiz = () => {
    const [numQuestions, setNumQuestions] = useState(5);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const dispatch = useDispatch();
    const { isSubmitted, questions } = useSelector((state) => state.quiz);
  
    const handleStartQuiz = () => {
      const shuffledQuestions = sampleQuestions.sort(() => 0.5 - Math.random());
      const selectedQuestions = shuffledQuestions.slice(0, numQuestions);
      dispatch(setQuestions(selectedQuestions));
    };
  
    const handleSubmitQuiz = () => {
      dispatch(submitQuiz());
    };
  
    const handleNextQuestion = () => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    };
  
    const handlePreviousQuestion = () => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      }
    };
  
    if (isSubmitted) {
      return <Result />;
    }
  
    if (!questions || questions.length === 0) {
      return (
        <div>
          <label>
            Number of Questions:
            <select
              value={numQuestions}
              onChange={(e) => setNumQuestions(parseInt(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </label>
          <button onClick={handleStartQuiz}>Start Quiz</button>
        </div>
      );
    }
  
    return (
      <div>
        <Timer />
        <Question question={questions[currentQuestionIndex]} />
        <div>
          <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
            Previous
          </button>
          {currentQuestionIndex < questions.length - 1 ? (
            <button onClick={handleNextQuestion}>Next</button>
          ) : (
            <button onClick={handleSubmitQuiz}>Submit</button>
          )}
        </div>
      </div>
    );
  };
  
  export default Quiz;
import React, { useState } from 'react';
import './App.css';

function App() {
  const [answers, setAnswers] = useState({
    blank1: '',
    blank2: '',
    blank3: ''
  });

  const [feedback, setFeedback] = useState({
    blank1: { status: 'unanswered', message: '', suggestion: '' },
    blank2: { status: 'unanswered', message: '', suggestion: '' },
    blank3: { status: 'unanswered', message: '', suggestion: '' }
  });

  const [isValidated, setIsValidated] = useState(false);

  // Correct answers with variations
  const correctAnswers = {
    blank1: ['final', 'FINAL', 'Final'],
    blank2: ['length', 'length()', 'LENGTH', 'Length'],
    blank3: ['new', 'NEW', 'New']
  };

  // Explanations for each answer
  const explanations = {
    blank1: 'The "final" keyword is used to declare constants in Java. Once assigned, a final variable cannot be changed.',
    blank2: 'The "length" property (or length() method) is used to get the size of an array in Java.',
    blank3: 'The "new" keyword is used to create new objects and allocate memory for them in Java.'
  };

  const handleInputChange = (blankId, value) => {
    setAnswers(prev => ({
      ...prev,
      [blankId]: value
    }));
    
    // Clear feedback when user starts typing again
    if (isValidated) {
      setFeedback(prev => ({
        ...prev,
        [blankId]: { status: 'unanswered', message: '', suggestion: '' }
      }));
    }
  };

  // Fuzzy matching function
  const isCloseMatch = (userAnswer, correctAnswers) => {
    const normalizedUser = userAnswer.trim().toLowerCase();
    const normalizedCorrect = correctAnswers.map(ans => ans.toLowerCase());
    
    // Check for exact match first
    if (normalizedCorrect.includes(normalizedUser)) {
      return { isExact: true, isClose: false };
    }
    
    // Check for close matches
    for (let correct of normalizedCorrect) {
      // Check for common typos (Levenshtein distance of 1-2)
      if (levenshteinDistance(normalizedUser, correct) <= 2) {
        return { isExact: false, isClose: true, suggestion: correct };
      }
      
      // Check if user answer is contained in correct answer or vice versa
      if (normalizedUser.includes(correct) || correct.includes(normalizedUser)) {
        return { isExact: false, isClose: true, suggestion: correct };
      }
    }
    
    return { isExact: false, isClose: false };
  };

  // Simple Levenshtein distance calculation
  const levenshteinDistance = (str1, str2) => {
    const matrix = [];
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    return matrix[str2.length][str1.length];
  };

  const validateAnswers = () => {
    const newFeedback = {};
    
    Object.keys(answers).forEach(blankId => {
      const userAnswer = answers[blankId];
      const corrects = correctAnswers[blankId];
      
      if (!userAnswer.trim()) {
        newFeedback[blankId] = {
          status: 'unanswered',
          message: 'Please provide an answer.',
          suggestion: ''
        };
      } else {
        const match = isCloseMatch(userAnswer, corrects);
        
        if (match.isExact) {
          newFeedback[blankId] = {
            status: 'correct',
            message: '✅ Correct!',
            suggestion: ''
          };
        } else if (match.isClose) {
          newFeedback[blankId] = {
            status: 'close',
            message: `⚠️ Almost correct! Did you mean: "${match.suggestion}"?`,
            suggestion: match.suggestion
          };
        } else {
          newFeedback[blankId] = {
            status: 'incorrect',
            message: `❌ Incorrect. The answer is: "${corrects[0]}"`,
            suggestion: corrects[0]
          };
        }
      }
    });
    
    setFeedback(newFeedback);
    setIsValidated(true);
  };

  const resetAnswers = () => {
    setAnswers({
      blank1: '',
      blank2: '',
      blank3: ''
    });
    setFeedback({
      blank1: { status: 'unanswered', message: '', suggestion: '' },
      blank2: { status: 'unanswered', message: '', suggestion: '' },
      blank3: { status: 'unanswered', message: '', suggestion: '' }
    });
    setIsValidated(false);
  };

  const getInputClassName = (blankId) => {
    const status = feedback[blankId]?.status;
    let className = 'blank-input';
    
    if (status === 'correct') className += ' correct';
    else if (status === 'close') className += ' close';
    else if (status === 'incorrect') className += ' incorrect';
    
    return className;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Java Code Exercise</h1>
        <div className="code-container">
          <pre className="java-code">
{`public class HelloWorld {
    public static void main(String[] args) {
        // Print a greeting message
        System.out.println("Hello, World!");
        
        // Declare and initialize a variable
        String message = "Welcome to Java!";
        
        // Use a loop to print numbers
        for (int i = 1; i <= 5; i++) {
            System.out.println("Number: " + i);
        }
        
        // Create an array
        int[] numbers = {1, 2, 3, 4, 5};
        
        // Fill in the blanks below:
        
        // 1. What keyword is used to declare a constant?
        // Answer: `}
          </pre>
          <input 
            type="text" 
            value={answers.blank1}
            onChange={(e) => handleInputChange('blank1', e.target.value)}
            placeholder="Type your answer"
            className={getInputClassName('blank1')}
          />
          {feedback.blank1.message && (
            <div className={`feedback ${feedback.blank1.status}`}>
              {feedback.blank1.message}
            </div>
          )}
          <pre className="java-code">
{`        
        // 2. What method is used to get the length of an array?
        // Answer: `}
          </pre>
          <input 
            type="text" 
            value={answers.blank2}
            onChange={(e) => handleInputChange('blank2', e.target.value)}
            placeholder="Type your answer"
            className={getInputClassName('blank2')}
          />
          {feedback.blank2.message && (
            <div className={`feedback ${feedback.blank2.status}`}>
              {feedback.blank2.message}
            </div>
          )}
          <pre className="java-code">
{`        
        // 3. What keyword is used to create a new object?
        // Answer: `}
          </pre>
          <input 
            type="text" 
            value={answers.blank3}
            onChange={(e) => handleInputChange('blank3', e.target.value)}
            placeholder="Type your answer"
            className={getInputClassName('blank3')}
          />
          {feedback.blank3.message && (
            <div className={`feedback ${feedback.blank3.status}`}>
              {feedback.blank3.message}
            </div>
          )}
          <pre className="java-code">
{`    }
}`}
          </pre>
        </div>
        
        <div className="controls">
          <button onClick={validateAnswers} className="check-button">
            Check Answers
          </button>
          <button onClick={resetAnswers} className="reset-button">
            Reset
          </button>
        </div>
        
        <div className="answers-section">
          <h3>Your Answers:</h3>
          <p>1. {answers.blank1 || 'Not answered'}</p>
          <p>2. {answers.blank2 || 'Not answered'}</p>
          <p>3. {answers.blank3 || 'Not answered'}</p>
        </div>

        {isValidated && (
          <div className="explanations-section">
            <h3>Explanations:</h3>
            <div className="explanation">
              <strong>1. final keyword:</strong> {explanations.blank1}
            </div>
            <div className="explanation">
              <strong>2. length property:</strong> {explanations.blank2}
            </div>
            <div className="explanation">
              <strong>3. new keyword:</strong> {explanations.blank3}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App; 
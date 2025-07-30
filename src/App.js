import React, { useState } from 'react';
import './App.css';

function App() {
  const [answers, setAnswers] = useState({
    blank1: '',
    blank2: '',
    blank3: ''
  });

  const handleInputChange = (blankId, value) => {
    setAnswers(prev => ({
      ...prev,
      [blankId]: value
    }));
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
            className="blank-input"
          />
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
            className="blank-input"
          />
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
            className="blank-input"
          />
          <pre className="java-code">
{`    }
}`}
          </pre>
        </div>
        
        <div className="answers-section">
          <h3>Your Answers:</h3>
          <p>1. {answers.blank1 || 'Not answered'}</p>
          <p>2. {answers.blank2 || 'Not answered'}</p>
          <p>3. {answers.blank3 || 'Not answered'}</p>
        </div>
      </header>
    </div>
  );
}

export default App; 
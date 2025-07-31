import React, { useState } from 'react';
import './App.css';

function App() {
  // Multiple question sets
  const questionSets = [
    {
      id: 1,
      title: "Java Basics - Variables and Constants",
      code: `public class HelloWorld {
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
        
        // Fill in the blanks below:`,
      questions: [
        {
          id: 'blank1',
          question: 'What keyword is used to declare a constant?',
          correctAnswers: ['final', 'FINAL', 'Final'],
          explanation: 'The "final" keyword is used to declare constants in Java. Once assigned, a final variable cannot be changed.'
        },
        {
          id: 'blank2',
          question: 'What method is used to get the length of an array?',
          correctAnswers: ['length', 'length()', 'LENGTH', 'Length'],
          explanation: 'The "length" property (or length() method) is used to get the size of an array in Java.'
        },
        {
          id: 'blank3',
          question: 'What keyword is used to create a new object?',
          correctAnswers: ['new', 'NEW', 'New'],
          explanation: 'The "new" keyword is used to create new objects and allocate memory for them in Java.'
        }
      ]
    },
    {
      id: 2,
      title: "Object-Oriented Programming",
      code: `public class Student {
    // Instance variables
    private String name;
    private int age;
    
    // Constructor
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Method to get student info
    public String getInfo() {
        return "Name: " + name + ", Age: " + age;
    }
    
    // Fill in the blanks below:`,
      questions: [
        {
          id: 'blank1',
          question: 'What keyword is used to make a variable accessible only within the class?',
          correctAnswers: ['private', 'PRIVATE', 'Private'],
          explanation: 'The "private" keyword is an access modifier that restricts access to class members only.'
        },
        {
          id: 'blank2',
          question: 'What keyword refers to the current object instance?',
          correctAnswers: ['this', 'THIS', 'This'],
          explanation: 'The "this" keyword refers to the current object instance and is used to distinguish between instance variables and parameters.'
        },
        {
          id: 'blank3',
          question: 'What keyword is used to create a method that can be called without creating an object?',
          correctAnswers: ['static', 'STATIC', 'Static'],
          explanation: 'The "static" keyword allows methods and variables to belong to the class rather than instances of the class.'
        }
      ]
    },
    {
      id: 3,
      title: "Exception Handling",
      code: `public class FileProcessor {
    public void readFile(String filename) {
        try {
            File file = new File(filename);
            Scanner scanner = new Scanner(file);
            
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                System.out.println(line);
            }
            scanner.close();
            
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        } finally {
            System.out.println("File processing completed.");
        }
    }
    
    // Fill in the blanks below:`,
      questions: [
        {
          id: 'blank1',
          question: 'What keyword is used to handle exceptions?',
          correctAnswers: ['try', 'TRY', 'Try'],
          explanation: 'The "try" keyword is used to define a block of code that might throw an exception.'
        },
        {
          id: 'blank2',
          question: 'What keyword is used to catch and handle exceptions?',
          correctAnswers: ['catch', 'CATCH', 'Catch'],
          explanation: 'The "catch" keyword is used to handle exceptions that are thrown in the try block.'
        },
        {
          id: 'blank3',
          question: 'What keyword is used to execute code that always runs, regardless of exceptions?',
          correctAnswers: ['finally', 'FINALLY', 'Finally'],
          explanation: 'The "finally" block always executes, whether an exception occurs or not, and is used for cleanup code.'
        }
      ]
    },
    {
      id: 4,
      title: "Collections Framework",
      code: `import java.util.*;

public class CollectionDemo {
    public static void main(String[] args) {
        // Create different types of collections
        List<String> names = new ArrayList<>();
        Set<Integer> numbers = new HashSet<>();
        Map<String, Integer> scores = new HashMap<>();
        
        // Add elements to collections
        names.add("Alice");
        names.add("Bob");
        numbers.add(42);
        scores.put("Alice", 95);
        
        // Fill in the blanks below:`,
      questions: [
        {
          id: 'blank1',
          question: 'What interface represents an ordered collection that allows duplicates?',
          correctAnswers: ['list', 'List', 'LIST'],
          explanation: 'The List interface represents an ordered collection that allows duplicate elements.'
        },
        {
          id: 'blank2',
          question: 'What interface represents a collection that does not allow duplicates?',
          correctAnswers: ['set', 'Set', 'SET'],
          explanation: 'The Set interface represents a collection that does not allow duplicate elements.'
        },
        {
          id: 'blank3',
          question: 'What interface represents a collection of key-value pairs?',
          correctAnswers: ['map', 'Map', 'MAP'],
          explanation: 'The Map interface represents a collection of key-value pairs where each key maps to exactly one value.'
        }
      ]
    },
    {
      id: 5,
      title: "String Manipulation",
      code: `public class StringDemo {
    public static void main(String[] args) {
        String text = "Hello World";
        String name = "Java";
        
        // String operations
        int length = text.length();
        String upper = text.toUpperCase();
        String lower = text.toLowerCase();
        boolean contains = text.contains("World");
        
        // Fill in the blanks below:`,
      questions: [
        {
          id: 'blank1',
          question: 'What method is used to get the number of characters in a string?',
          correctAnswers: ['length', 'length()', 'Length', 'LENGTH'],
          explanation: 'The length() method returns the number of characters in a String object.'
        },
        {
          id: 'blank2',
          question: 'What method converts a string to uppercase?',
          correctAnswers: ['touppercase', 'toUpperCase', 'TOUPPERCASE', 'ToUpperCase'],
          explanation: 'The toUpperCase() method converts all characters in a string to uppercase.'
        },
        {
          id: 'blank3',
          question: 'What method checks if a string contains a specific substring?',
          correctAnswers: ['contains', 'Contains', 'CONTAINS'],
          explanation: 'The contains() method checks if a string contains a specified sequence of characters.'
        }
      ]
    },
    {
      id: 6,
      title: "Loop Control",
      code: `public class LoopDemo {
    public static void main(String[] args) {
        // Different types of loops
        for (int i = 0; i < 5; i++) {
            if (i == 2) {
                continue; // Skip iteration
            }
            System.out.println("Number: " + i);
        }
        
        int count = 0;
        while (count < 3) {
            if (count == 1) {
                break; // Exit loop
            }
            System.out.println("Count: " + count);
            count++;
        }
        
        // Fill in the blanks below:`,
      questions: [
        {
          id: 'blank1',
          question: 'What keyword is used to skip the current iteration of a loop?',
          correctAnswers: ['continue', 'Continue', 'CONTINUE'],
          explanation: 'The continue keyword skips the current iteration of a loop and continues with the next iteration.'
        },
        {
          id: 'blank2',
          question: 'What keyword is used to exit a loop completely?',
          correctAnswers: ['break', 'Break', 'BREAK'],
          explanation: 'The break keyword is used to exit a loop or switch statement completely.'
        },
        {
          id: 'blank3',
          question: 'What type of loop executes at least once before checking the condition?',
          correctAnswers: ['do', 'Do', 'DO', 'do-while', 'do while'],
          explanation: 'The do-while loop executes the loop body at least once before checking the condition.'
        }
      ]
    }
  ];

  const [currentSetIndex, setCurrentSetIndex] = useState(0);
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

  const currentSet = questionSets[currentSetIndex];

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
    
    currentSet.questions.forEach(question => {
      const userAnswer = answers[question.id];
      const corrects = question.correctAnswers;
      
      if (!userAnswer.trim()) {
        newFeedback[question.id] = {
          status: 'unanswered',
          message: 'Please provide an answer.',
          suggestion: ''
        };
      } else {
        const match = isCloseMatch(userAnswer, corrects);
        
        if (match.isExact) {
          newFeedback[question.id] = {
            status: 'correct',
            message: '✅ Correct!',
            suggestion: ''
          };
        } else if (match.isClose) {
          newFeedback[question.id] = {
            status: 'close',
            message: `⚠️ Almost correct! Did you mean: "${match.suggestion}"?`,
            suggestion: match.suggestion
          };
        } else {
          newFeedback[question.id] = {
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

  const generateRandomSet = () => {
    const randomIndex = Math.floor(Math.random() * questionSets.length);
    setCurrentSetIndex(randomIndex);
    resetAnswers();
  };

  const goToNext = () => {
    const nextIndex = (currentSetIndex + 1) % questionSets.length;
    setCurrentSetIndex(nextIndex);
    resetAnswers();
  };

  const goToPrevious = () => {
    const prevIndex = currentSetIndex === 0 ? questionSets.length - 1 : currentSetIndex - 1;
    setCurrentSetIndex(prevIndex);
    resetAnswers();
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
        <div className="set-info">
          <h2>{currentSet.title}</h2>
          <p>Exercise {currentSet.id} of {questionSets.length}</p>
        </div>
        
        <div className="code-container">
          <pre className="java-code">
{currentSet.code.split('// Answer: `')[0]}
          </pre>
          {currentSet.questions.map((question, index) => (
            <div key={question.id}>
              <pre className="java-code">
{`        // ${index + 1}. ${question.question}
        // Answer: `}
              </pre>
              <input 
                type="text" 
                value={answers[question.id]}
                onChange={(e) => handleInputChange(question.id, e.target.value)}
                placeholder="Type your answer"
                className={getInputClassName(question.id)}
              />
              {feedback[question.id]?.message && (
                <div className={`feedback ${feedback[question.id].status}`}>
                  {feedback[question.id].message}
                </div>
              )}
            </div>
          ))}
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
          <button onClick={goToPrevious} className="nav-button prev-button">
            ← Previous
          </button>
          <button onClick={goToNext} className="nav-button next-button">
            Next →
          </button>
        </div>
        
        <div className="answers-section">
          <h3>Your Answers:</h3>
          {currentSet.questions.map(question => (
            <p key={question.id}>
              {question.id.replace('blank', '')}. {answers[question.id] || 'Not answered'}
            </p>
          ))}
        </div>

        {isValidated && (
          <div className="explanations-section">
            <h3>Explanations:</h3>
            {currentSet.questions.map(question => (
              <div key={question.id} className="explanation">
                <strong>{question.id.replace('blank', '')}. {question.question.split('?')[0]}:</strong> {question.explanation}
              </div>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}

export default App; 
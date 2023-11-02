import { 
  useState, 
  useCallback, 
  useEffect, 
  useRef 
} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // need a length, characters allowed (letters, numbers, etc.)
  // need state of password
  const [length, setLength] = useState(6);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false); 
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);


  const generatePassword = useCallback(() => {
    let pass = "";
    let str = 
    "ABCDEFGHIJKLMNOPKRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if (numAllowed)
      str += "0123456789";
    if (charAllowed)
      str += "!@#$%^&*()_+";

      for (let i = 1; i < length; i++) {
        const char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
      }
      setPassword(pass);

  }, [length, numAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select();
  };


  useEffect(() => {     // this allows for the password to be re-rendered every time 
    generatePassword(); // user changes length or checkboxes, useEffect() is popular
  }, [length, numAllowed, charAllowed, generatePassword]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password
         Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden
        mb-4'>
          <input
          type='text'
          value={password}
          className='outline-non w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}   // keeps reference to password in order track actions
          />
          <button
          onClick={copyPasswordToClipboard} // without () to use, otherwise it is called
          className='out bg-blue-700 text-white px-3
          py-0.5 shrink-0'
          >copy</button>
        </div>
        <div
        className='flex text-sm gap-x-2'
        >
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={25}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)} // strip the value from the event e
            name=''
            id='length' 
            />
            <label htmlFor='length'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numAllowed}   // default state
            onChange={() => {
              setNumAllowed((prev) => !prev)  // captures current value as 'prev' in a 
            }}                                // callback to respond in real time
            name=''
            id='number' 
            />
            <label htmlFor='number'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setcharAllowed((prev) => !prev)
            }} 
            name=''
            id='charInput' 
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

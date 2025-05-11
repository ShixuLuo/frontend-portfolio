import { useState } from 'react';
import Output from '../components/Output';
import Form from '../components/Form';
import generatePassword from '../utils/password';


export default function MainPage() {
  const [passwordLength, setPasswordLength] = useState<number>(10);
  const [config, setConfig] = useState<number>(0);
  const [passwordOutput, setPasswordOutput] = useState<string>('');
  const [strength, setStrength] = useState<number>(0);

  const handleGenerate = () => {
    const [newPassword, newStrength]: [string, number] = generatePassword(config, passwordLength);
    setStrength(newStrength);
    setPasswordOutput(newPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-grey-950 min-h-screen md:gap-4">
      <h1 className="text-sm text-grey-600 md:text-lg">
        Password Generator
      </h1>
      <div className="flex flex-col gap-2 bg-grey-950 md:gap-3 w-min">
        <Output
          passwordOutput={passwordOutput}
        />
        <Form
          sliderProps={{ 
            passwordLength: passwordLength, 
            setPasswordLength: setPasswordLength 
          }}
          optionsProps={{ 
            config: config, 
            setConfig: setConfig 
          }}
          strength={strength}
          handleGenerate={handleGenerate}
        />
      </div>
    </div>
  );
}

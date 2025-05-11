import { useState, useEffect } from 'react';
import IconCopy from '../assets/images/icon-copy.svg?react';

export default function Output({ passwordOutput }: {passwordOutput: string}) {
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    setCopied(false);
  }, [passwordOutput]);

  const handleCopy = () => {
    if (passwordOutput !== "") {
      setCopied(true);
      navigator.clipboard.writeText(passwordOutput);
    }
  };

  return (
    <div className="p-2 bg-grey-800 flex items-center justify-between md:px-4 w-full">
      <input 
        type="text" 
        readOnly={true}
        placeholder="P4$5W0rD!"
        value={passwordOutput}
        className="text-lg text-grey-200 placeholder:text-grey-700 placeholder:text-lg focus:outline-none md:text-xl md:placeholder:text-xl w-full flex-1"
      />
      <div className="flex items-center gap-1 justify-end">
        { copied && <span className="text-green-200 text-sm uppercase">
          Copied
        </span>}
        <button onClick={handleCopy} className="">
          <IconCopy className="text-green-200 hover:text-white"/>
        </button>
      </div>
    </div>
  )
}

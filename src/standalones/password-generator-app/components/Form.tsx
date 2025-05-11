import IconArrowRight from '../assets/images/icon-arrow-right.svg?react';
import iconCheck from '../assets/images/icon-check.svg';

type SliderProps = {
  passwordLength: number;
  setPasswordLength: (newLength: number) => void;
};

function Slider({ passwordLength, setPasswordLength }: SliderProps) {
  const MIN = 0;
  const MAX = 20;
  const percentage = (((passwordLength - MIN) / (MAX - MIN)) * 100).toFixed(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordLength(Number(e.target.value));
  };

  return (
      <div className="flex flex-col gap-1">
        <label htmlFor="length" className="flex justify-between items-center">
          <span className="text-sm">
            Character Length
          </span>
          <span className="text-lg text-green-200">
            {passwordLength}
          </span>
        </label>
        <input 
          type="range" 
          id="length" 
          value={passwordLength}
          min={MIN} 
          max={MAX} 
          step="1" 
          className={'slider bg-linear-[var(--my-gradient)]'}
          onChange={handleChange}
          style={{
            "background": `linear-gradient(to right, #A4FFAF 0% ${percentage}%, #18171F ${percentage}% 100%)`,
          }}
        />
      </div>
  )
}

type OptionProps = {
  config: number;
  setConfig: (arg0: (newConfig: number) => number) => void;
  mask: number;
  content: string;
};

function Option({ config, setConfig, mask, content }: OptionProps) {
  const checked: boolean = (config & mask) !== 0;
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setConfig((prev: number) => prev | mask);
    } else {
      setConfig((prev: number) => prev & (~mask));
    }
  };
  const checkerContainerStyle = "w-[20px] h-[20px] border-2 border-grey-200 flex justify-center items-center hover:border-green-200 " + (checked ? "bg-green-200 border-none" : "");
  const checkerIconStyle = checked ? "visible" : "invisible";

  return (
    <div>
      <label htmlFor={`check-${mask}`} className="flex gap-3 items-center">
        <input type="checkbox" id={`check-${mask}`} className="sr-only peer" onChange={handleChecked}/>
        <div className={checkerContainerStyle} >
          <img src={iconCheck} alt="checker" className={checkerIconStyle} />
        </div>
        <span className="text-sm">
          {content}
        </span>
      </label>
    </div>
  )
}

type OptionsProps = {
  config: number;
  setConfig: (arg0: (newConfig: number) => number) => void;
};

function Options({ config, setConfig }: OptionsProps) {
  const OPTIONS: {mask: number, content: string}[] = [
    { mask: 1, content: "Include Uppercase Letters" },
    { mask: 2, content: "Include Lowercase Letters" },
    { mask: 4, content: "Include Numbers" },
    { mask: 8, content: "Include Symbols" },
  ];
  
  return (
    <div className="flex flex-col gap-2">
      {OPTIONS.map(({mask, content}) => 
        (<Option key={mask} config={config} setConfig={setConfig} mask={mask} content={content} />)
      )}
    </div>
  )
}

function Strength({ strength }: { strength: number }) {
  const STRENGTH_CLASS: string[] = [
    'border-2 border-grey-200',
    'bg-red-500',
    'bg-orange-400',
    'bg-yellow-300',
    'bg-green-200',
  ];
  
  return (
    <div className="bg-grey-850 p-2 flex items-center justify-between">
      <span className="uppercase text-sm text-grey-600">
        Strength
      </span>
      <div className="flex gap-1">
        {Array.from({ length: 4 }).map((_, i) => 
          (<div key={i} className={`w-[10px] h-[28px] ${i < strength ? STRENGTH_CLASS[strength] : STRENGTH_CLASS[0]}`}></div>)
        )}
      </div>
    </div>
  );
}

function Button({ onClick }: {onClick: () => void}) {

  return (
    <button onClick={onClick} className="bg-green-200 py-2 px-13 flex justify-center items-center gap-2 border-2 border-green-200 hover:bg-grey-850 group md:px-22 md:gap-3">
      <span className="uppercase text-grey-800 text-sm group-hover:text-green-200">
        Generate
      </span>
      <IconArrowRight className="object-none text-grey-800 group-hover:text-green-200" />
    </button>
  );
}

type FormProps = {
  sliderProps: SliderProps;
  optionsProps: OptionsProps;
  strength: number;
  handleGenerate: () => void;
};

export default function Form({ sliderProps, optionsProps, strength, handleGenerate }: FormProps) {
  
  return (
    <div className="w-min flex flex-col gap-4 bg-grey-800 text-white p-2 md:px-4 md:py-3 md:p-3">
      <Slider {...sliderProps} />
      <Options {...optionsProps} />
      <div className="flex flex-col gap-2 md:gap-4">
        <Strength strength={strength}/>
        <Button onClick={handleGenerate} />
      </div>
    </div>
  )
}

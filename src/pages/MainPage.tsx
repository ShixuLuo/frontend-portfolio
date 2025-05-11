import Grid from '../components/Grid';
import '../index.css';

export default function MainPage() {

  return (
    <div className="font-mono bg-slate-100 min-h-screen w-full flex flex-col items-center md:pb-6 pt-6 gap-3">
      <h1 className="font-[Monoton] md:text-xl text-[48px]">
        Portfolio
      </h1>
      <Grid />
    </div>
  )
}

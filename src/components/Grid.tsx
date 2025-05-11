import Card from './Card';
import collection from '../data/data';

export default function Grid() {

  return (
    <div className="text-base bg-slate-300 grid md:grid-cols-[9em_9em_9em] grid-cols-2 grid-rows-auto p-4 gap-2 rounded-md">
      {
        collection.map((item) => (
          <Card key={item.name} {...item} />
        ))
      }
    </div>
  )
}

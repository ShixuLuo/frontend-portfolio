type StructureType = 'component' | 'page' | 'app';

const basename = import.meta.env.BASE_URL;

const STRUCTURE_CLASS: Record<StructureType, string>  = {
  'component': 'md:col-span-1',
  'page': '',
  'app': 'md:col-span-3',
};

export default function Card({ structure, name, path }: {structure: StructureType, name: string, path: string}) {
  let url = basename;
  if (/index(?:\.html)?$/.test(path)) {
    url += path;
  } else {
    url = url + '#/' + path;
  }

  return (
    <a href={url} className={`slate-500 h-[9em] bg-slate-400 rounded-md p-2 flex flex-col justify-between col-span-2 ` + STRUCTURE_CLASS[structure] + ' hover:bg-slate-700 group'}>
      <h3 className="group-hover:text-slate-300">
        # {structure} 
      </h3>
      <h2 className="text-lg slate-800 group-hover:text-slate-200">
        {name}
      </h2>
    </a>
  )
}

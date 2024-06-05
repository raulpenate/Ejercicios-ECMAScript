import { MovieProps } from "../types/types";

export const MovieCard = ({ movie }: MovieProps): JSX.Element => {

  const { title, protagonist, category, url } = movie;


  return (
      <div className="card-class grid grid-cols-2 h-64">

        <div className="shadow-lg">
          <img src={url} className=" h-full w-100 rounded p-1 bg-slate-900" />
        </div>

        <div>
          {/* Title */}
          <div className="white-text my-5 mb-2 text-xl font-bold tracking-tight uppercase">
            {title}
          </div>
          <hr className="border-31 mx-6 mt-5"/>
          {/* Title */}

          {/* Info */}
          <div className="grid grid-cols-1">

            <div className="my-3 font-bold text-white/70 capitalize font-mono">
              {protagonist}
            </div>

            <hr className="border-31 mx-6"/>

            <div className="my-3 font-bold text-white/80 font-mono">
              {category} 
            </div>

          </div>
          {/* Info */}

        </div>
      </div>

  )
}
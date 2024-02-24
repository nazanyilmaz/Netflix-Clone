import { baseImgUrl, options } from "../constant/index";

const SimilarCard = ({ movie }) => {
  console.log(movie);
  return (
    <div className="grid grid-template-col-auto ">
      <div className="relative ">
        {movie.backdrop_path ? (
          <img
            src={baseImgUrl + movie.backdrop_path}
            className="w-[300px] h-[160px] object-contain opacity-90 hover:opacity-30"
          />
        ) : (
          <div className="h-[160px] w-[300px] bg-gray-600"></div>
        )}
        <div className="line-clamp-1  absolute top-28 left-1 grid place-items-center opacity-0 hover:opacity-100 text-left">
          {movie.title}
        </div>
        <span className="font-semibold">Relesae Date: </span>
        <span>{movie.release_date}</span>
      </div>
    </div>
  );
};
export default SimilarCard;

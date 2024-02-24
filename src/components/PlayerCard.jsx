import { baseImgUrl } from "../constant";

const PlayerCard = ({ player }) => {
  return (
    <div className="w-[140px] rounded-md overflow-hidden relative">
      {player.profile_path ? (
        <img className="h-[175px]" src={baseImgUrl + player.profile_path} />
      ) : (
        <div className="h-[175px] w-[116px] bg-gray-600"></div>
      )}

      <h2 className="text-lg font-semibold">{player.original_name}</h2>
      <h2 className="line-clamp-1  absolute bg-black inset-0 bg-opacity-40 grid place-items-center opacity-0 hover:opacity-80">
        {player.character}
      </h2>
    </div>
  );
};

export default PlayerCard;

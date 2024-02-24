import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseImgUrl, options } from "../constant/index";
import Loader from "../components/Loader";
import DetailDisplay from "../components/DetailDisplay";
import millify from "millify";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import PlayerCard from "../components/PlayerCard";
import SimilarCard from "../components/SimilarCard";

const DetailPage = () => {
  const [movie, setMovie] = useState(null);

  //url'den filmin id si alinacak

  const { id } = useParams(); //useparams ile url dan verileri çekiyoruz.

  //apiden filmin bilgilerini al
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos,credits,similar`,
        options
      )
      .then((res) => setMovie(res.data));
  }, []);
  console.log(movie);
  return (
    <div>
      {/* eger yuklenmediyse yükleniyor */}
      {!movie && <Loader />}
      {/* gelindiyse goster */}
      {movie && (
        <div>
          <div className="relative h-[30vh]">
            <img
              className="position-center w-full h-full"
              src={baseImgUrl + movie.backdrop_path}
            />
            <div className="absolute top-[190px] left-[590px] bg-opacity-40 grid place-items-center">
              <span className="text-3xl flex items-center justify-center h-[70px] w-[250px] bg-white text-black font-semibold opacity-55 hover:opacity-70">
                {movie.title}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 my-5">
            <div>
              <DetailDisplay title="Genres" data={movie.genres} />
              <DetailDisplay
                title="Spoken
                Languages"
                data={movie.spoken_languages}
              />
              <DetailDisplay
                title="Production Companies"
                data={movie.production_companies}
              />
              <DetailDisplay
                title="Production Countries"
                data={movie.production_countries}
              />
            </div>
            <div>
              <h2 className="font-semibold my-2 text-center">
                {movie.tagline}
              </h2>
              <p className="my-4">{movie.overview}</p>
              <p className="flex flex-col">
                <span>Release Date: {movie.release_date}</span>
                <span> Popularity : {millify(movie.popularity)}</span>
              </p>
            </div>
            <h1 className="title">Cast List</h1>
          </div>
          <div>
            <Splide
              options={{
                autoWidth: true,
                gap: "10px",
                rewind: true,
                lazyLoad: true,
              }}
            >
              {movie.credits.cast.map((player) => (
                <SplideSlide key={player.id}>
                  <PlayerCard key={player.credit_id} player={player} />
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <div>
            <h1 className="title">Similar Movies</h1>

            <div className="grid grid-cols-3 gap-8 mt-6">
              {!movie ? (
                <Loader />
              ) : (
                movie.similar.results.map((item) => (
                  <SimilarCard movie={item} />
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;

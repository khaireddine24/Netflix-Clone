import { useEffect, useState } from "react";
import { Movie } from "../types/movieType";
import { Tv } from "../types/tvType";
const useTrending = (
  type: string,
  time: string
): { data: (Movie | Tv)[]; loading: boolean } => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWQ3ZWY5ZjRiOGI2YzRhYmVkNDkxMzI4MTI4YWVlZSIsIm5iZiI6MTcyNjc4NzI4OC4yNDY4NDcsInN1YiI6IjY2ZWNhNjdkMzU2MjgwNzMwMGZhOTViNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-aSq3cznOqB_xZA0ni1pI_CBaE3TrhEG3xh0Rc1zUjs",
    },
  };
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<(Movie | Tv)[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/${type}/${time}?language=en-US&page=1`,
          options
        );
        const data = await response.json();
        setData(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {};
  }, []);
  return { data, loading };
};

export default useTrending;

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

interface VideoPreview {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

const VideoPlayer = () => {
  const { id, mediaType } = useParams();
  const [video, setVideo] = useState<VideoPreview | null>(null);
  const [error, setError] = useState<string | null>(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWQ3ZWY5ZjRiOGI2YzRhYmVkNDkxMzI4MTI4YWVlZSIsIm5iZiI6MTcyNjc4NjI5Ny45ODQ0MjksInN1YiI6IjY2ZWNhNjdkMzU2MjgwNzMwMGZhOTViNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l8i2yJZb5hcL4wHQWAZo3jYkvYvtD_J3R3UFDb8LSro",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!id || !mediaType) {
        setError("Invalid ID or media type");
        return;
      }

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${mediaType}/${id}/videos?language=en-US`,
          options
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        if (data.results && data.results.length > 0) {
          setVideo(data.results[0]);
        } else {
          setError("No video found");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to fetch video data");
      }
    };

    fetchData();
  }, [id, mediaType]);

  if (error) {
    return <div className="h-screen flex items-center justify-center text-red-500">{error}</div>;
  }

  if (!video) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="h-screen relative">
      <ReactPlayer
        width={"100%"}
        height={"100%"}
        playing={true}
        controls={true}
        light={true}
        url={`https://www.youtube.com/watch?v=${video.key}`}
      />
    </div>
  );
};

export default VideoPlayer;
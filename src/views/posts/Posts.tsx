import { useEffect, useState } from "react";
import axios from "axios";

interface Photo {
  albumId: 1;
  id: 1;
  title: "accusamus beatae ad facilis cum similique qui sunt";
  url: "https://via.placeholder.com/600/92c952";
  thumbnailUrl: "https://via.placeholder.com/150/92c952";
}
/**
 *
 */
function PhotoItem() {}

/**
 *
 * @returns
 */
export default function () {
  const [photos, setPhotos] = useState<Photo[]>([]);

  function fetchPhotos() {
    return axios
      .get<Array<Photo>>("https://jsonplaceholder.typicode.com/photos?_limit=5")
      .then((resp) => {
        setPhotos(resp.data);
      });
  }

  useEffect(() => {
    fetchPhotos();
  });

  return (
    <div className="py-4 px-4 grid grid-cols-4 gap-4">
      {photos.map((photo) => {
        return (
          <div className="py-4">
            <img className="h-auto rounded-md" src={photo.thumbnailUrl} alt="" />
          </div>
        );
      })}
    </div>
  );
}


export interface IGenre {
  genreId: string;
  name: string;
  url: string;
}

export interface IApp {
  rank: number;
  name: string;
  genres: IGenre[];
  artistName: string;
  artworkUrl100: string;
}

export const getReleaseYear = (releaseDate: string): number => { 
  return Number(releaseDate.split('-')[0])
}
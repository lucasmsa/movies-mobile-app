export const getReleaseYear = (releaseDate: string): string => { 
  return releaseDate.split('-')[0]
}
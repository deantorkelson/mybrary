import { Author } from '../models/author'

export const MybraryApiService = () => {
  const apiUrl = "https://localhost:3000"

  const getAuthors = () => (
    fetch(apiUrl + '/authors').then((response) => response.json())
  )

  const addAuthor = (author: Author) => (
    fetch(apiUrl + '/authors', {
      body: JSON.stringify(author),
      method: 'POST'
    }).then((response) => response.json())
  )
}
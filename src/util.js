const checkForError = (response) => {
  if (!response.ok) {
    throw new Error("Something is wrong with the server. Please try again later")
  } else {
    return response.json()
  }
}

export default checkForError;
const checkForError = (response) => {
  if (!response.ok) {
    console.log('failed')
    throw new Error("Something is wrong with the server. Please try again later")
  } else {
    console.log('success')
    return response.json()
  }
}

export default checkForError;
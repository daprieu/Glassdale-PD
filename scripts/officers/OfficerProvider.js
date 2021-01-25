
let officers = []

export const useOfficers = () => {
  return officers.slice()
}

export const getOfficers = () => {
  /*
      Load database state into application state with a fetch().
      Make sure the last then() updates the officers array
  */
  return fetch("https://criminals.glassdale.us/officers")
    .then(response => response.json())
    .then(parsedResponse => {
      // console.table(parsedResponse)
      officers = parsedResponse
    })

}
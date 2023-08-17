const apiUrl = "https://api-eko-bazarek.azurewebsites.net/api/";

export async function makeApiCall(endpoint) {
  const response = await fetch(apiUrl + endpoint);
  const apiJsonResponse = await response.json();
  return apiJsonResponse;
}

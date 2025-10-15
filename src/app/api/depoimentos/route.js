export async function getDepoimentos() {
  fetch('../dados.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao carregar o JSON: ' + response.status);
      }
      const data = response.json();
      return data.depoimentos;
    })
    .catch(error => {
      console.error(error);
      const errorResponse = { status: 'Error', error: error };
      return Response.json(errorResponse);
    });

  return Response.json(dados);
}

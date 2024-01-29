/**
 * Funcion encargada de hacer un get request a la api
 * de las notas del usuario con el idUser ingresado.
 *
 * Params:
 *  *idUser int: Id del usuario que consulta sus notas.
 * Retorna:
 */
export async function getNotes(idUser) {
  const response = await fetch("/api/notes/" + idUser, {
    method: "GET",
  });
  await console.log(response);
  return await response;
}



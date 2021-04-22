const headers = new Headers({
  'content-type': 'application/json;charset=UTF-8',
})

export function fetchApi<T>(
  url: string,
  options?: Record<string, unknown>,
): Promise<T> {
  return fetch(`${process.env.REACT_APP_HOST_API}${url}`, {
    ...options,
    headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }

      return response.json() as Promise<T>
    })
    .then((response) => response)
}

interface IArgs {
  url: string;
  method?: "GET" | "POST";
  body?: object;
  headers?: object;
}

export const api = ({ url, method = "GET", body, headers }: IArgs) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json",
        ...headers,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

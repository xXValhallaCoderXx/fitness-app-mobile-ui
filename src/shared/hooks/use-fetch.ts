import { useState } from "react";

interface IProps {
  url: string;
  method?: "GET" | "POST";
  headers?: object;
  body?: object;
}

interface IReturn {
  loading: boolean;
  callApi: ({ url }: IProps) => void;
  error: boolean;
  data: any;
}

const useFetch = (): IReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const callApi = ({
    url,
    method = "GET",
    headers = {},
    body = {},
  }: IProps) => {
    setLoading(true);
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
        console.log("RESPONSE: ", response);
        setData(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        console.log("ERROR", err);
      });
  };

  return { loading, error, data, callApi };
};

export default useFetch;

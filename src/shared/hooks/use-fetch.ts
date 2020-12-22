import { useState } from "react";
import { api } from "shared/utils/api";

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
    api({ url, method, headers, body })
      .then((res) => {
        console.log("RESPONSE: ", res);
        setData(null);
        setLoading(false);
      })
      .catch((err) => {
        console.log("ERROR", err);

        setError(true);
        setLoading(false);
      });
    setLoading(true);
  };

  return { loading, error, data, callApi };
};

export default useFetch;

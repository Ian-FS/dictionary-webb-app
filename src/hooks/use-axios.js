import { useEffect } from "react";
import { useState } from "react";

export default function useAxios(configRequest) {
  const { axiosInstance, method, url, otherConfig = {} } = configRequest;
  const [data, setData] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance[method](url, {
          ...otherConfig,
        });
        isSearch;
        setData(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsSearch(true);
      }
    };
    fetchData();
  }, [isSearch]);

  return [data, isSearch, setIsSearch];
}

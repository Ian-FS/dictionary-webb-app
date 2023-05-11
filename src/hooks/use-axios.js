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
        const data = res.data;
        setData(...data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsSearch(false);
      }
    };
    fetchData();
  }, [isSearch]);

  return [data, isSearch, setIsSearch];
}

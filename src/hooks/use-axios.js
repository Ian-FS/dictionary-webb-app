import { useEffect } from "react";
import { useState } from "react";

export default function useAxios(configRequest) {
  const { axiosInstance, method, url, otherConfig = {} } = configRequest;
  const [data, setData] = useState([]);
  const [researched, setResearched] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance[method](url, {
          ...otherConfig,
        });
        setData(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        setResearched(true);
      }
    };
    researched;
    fetchData();
  }, [researched]);

  return [data, setResearched, loading];
}

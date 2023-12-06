import { useEffect, useState } from "react";
import { fetchDataFromAnotherApi } from "../utils/api";
const useFetchAnother = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);

        fetchDataFromAnotherApi(url)
            .then((res) => {
                setLoading(true);
                setData(res);
            })
            .catch((err) => {
                setLoading(false);
                setError("Something went wrong!");
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetchAnother; 
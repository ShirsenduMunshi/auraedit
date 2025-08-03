import { useMutation, useQuery } from "convex/react"
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const useConvexQuery = (query, ...args ) => {
    const result = useQuery(query, ...args);

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (result === undefined || result === null) {
            setIsLoading(true);
        }
        else {
            try {
                setData(result);
                setError(null);                
            } catch (error) {
                setError(error);
                toast.error(error.message ||"An error occurred while fetching data.");                
            }
            finally {
                setIsLoading(false);
            }
        }
    }, [result]);

    return { data, error, isLoading };
};

export const useConvexMutation = (mutation) => {
    const mutationFn = useMutation(mutation);

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const mutate = async (...args) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await mutationFn(...args);
            setData(response);
            setError(null);
            return response;
        } catch (error) {
            setError(error);
            toast.error(error.message || "An error occurred while processing your request.");
        } finally {
            setIsLoading(false);
        }
    }

    return { mutate, data, error, isLoading };
};
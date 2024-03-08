import { User } from "@/types/User";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
    auth0Id: string,
    email: string
}

type UpdateUserRequest = {
    name: string,
    addressLine1: string,
    city: string,
    country: string
}

export const useGetMyUser = () => {
    const { getAccessTokenSilently } = useAuth0()

    const getMyUserRequest = async (): Promise<User> => {
        const token = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        })

        if (!response.ok) {
            throw new Error('Failed to create user')
        }
        return response.json() ;
    }

    const { error, isLoading, data: currentUser } = useQuery("getUserQuery", getMyUserRequest)


    if(error){
        toast.error(error.toString())
    }


    return {
        isLoading, currentUser, error
    }
}

export const useCreateMyUser = () => {
    const { getAccessTokenSilently } = useAuth0()

    const createMyUserRequest = async (user: CreateUserRequest) => {

        const token = await getAccessTokenSilently();
        console.log('token: ', token);

        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        if (!response.ok) {
            throw new Error('Failed to create user')
        }
    }

    const { mutateAsync: createUser, isError, isSuccess, data } = useMutation({
        mutationFn: createMyUserRequest
    })
    return {
        createUser, isError, isSuccess, data
    }
}

export const useUpdateMyUser = () => {
    const { getAccessTokenSilently } = useAuth0()

    async function updateMyUser(formData: UpdateUserRequest) {
        const token = await getAccessTokenSilently();


        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (!response.ok) {
            throw new Error('Unable to Update User')
        }
    }

    const { mutateAsync: updateUser, isLoading, isError, isSuccess } = useMutation(updateMyUser)
    if (isSuccess) {
        toast.success("User Profile Sucessfully Updated")
    }

    else if (isError) {
        toast.error("Error Updating User Profile")
    }
    return {
        updateUser, isLoading
    }
}





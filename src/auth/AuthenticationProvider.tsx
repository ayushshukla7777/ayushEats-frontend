import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

type Props = {
    children: React.ReactNode
}

function AuthenticationProvider({ children }: Props) {
    const navigate = useNavigate();

    const redirectCallback = () => {
        navigate('/auth-callback')
    }

    return (
        <Auth0Provider
            domain={import.meta.env.VITE_AUTH0_DOMAIN}
            clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
            authorizationParams={{
                redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
                audience: import.meta.env.VITE_AUTH0_AUDIENCE,
            }}
            onRedirectCallback={redirectCallback}
        >
            {children}
        </Auth0Provider>
    )
}

export default AuthenticationProvider
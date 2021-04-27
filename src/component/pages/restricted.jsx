import { useLocation } from 'react-router';

export const NotAllowPage = () => {
    const { state } = useLocation();

    return (
        <div>
            'Restricted!!'
            <p>You are not allowed to visit <strong>{state?.from}</strong>page. Please lofin first.</p>
        </div>
    )
};
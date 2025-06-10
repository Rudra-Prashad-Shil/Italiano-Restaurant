import { useRouteError } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <img
                src="https://cdn-icons-png.flaticon.com/512/190/190406.png"
                alt="Error Icon"
                className='w-24 h-24 mb-10'
            />
            <h1 className='text-7xl font-bold'>Oops!</h1>
            <p className='mt-10 text-xl'>Sorry, an unexpected error has occurred.</p>
            <p className='mt-3'>
                <i className='text-red-500 mr-5'>{error.statusText || error.message}</i>
                <a href="/" className='text-amber-600 underline'>Home</a>
            </p>
        </div>
    );

};

export default ErrorPage;
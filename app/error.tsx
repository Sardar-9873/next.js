"use client";

interface IErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
};

function Error({ error, reset }: IErrorProps) {
    // console.log(typeof error, '===>>>error<<<===');
    // console.log(reset, '===>>>reset<<<===');

    return (
        <>
            <h1>An error which is,"{error.message}" occured in application please try again.</h1>
            <button onClick={() => reset()}>Try Again</button>
        </>
    );
}

export default Error;
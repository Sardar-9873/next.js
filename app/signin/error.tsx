"use client";

interface IErrorProps {
    error: Error & { digest?: String },
    reset: () => void
}


function Error({ error, reset }: IErrorProps) {


    return (
        <div>
            <h1>
                An error occured in signin page which is "{error.message}"
            </h1>
            <button onClick={() => reset()}>Try Again</button>
        </div>
    )
}

export default Error;
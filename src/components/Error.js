import { useRouteError } from "react-router"

const Error = () => {

    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Something Went Wrong!!!</h1>
            <h2>{`${err.status} : ${err.statusText}`}</h2>
            <h3>{err.data}</h3>
        </div>
    )
};

export default Error;
import { useLoaderData } from "react-router-dom";

export default function SearchPage() {
    const data = useLoaderData();
    console.log(data);
    return <div>Search Page</div>;
}

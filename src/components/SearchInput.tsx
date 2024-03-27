import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

export default function SearchInput() {

    const [term, setTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate(`/search?term=${term}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={term} onChange={(event) => setTerm(event.target.value)} />
        </form>
    );

    // return (
    //     <Form action="/search">
    //         <input name="term" />
    //     </Form>
    // );

}

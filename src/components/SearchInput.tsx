import { useState } from "react";

export default function SearchInput() {

    const [term, setTerm] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={term} onChange={(event) => setTerm(event.target.value)} />
        </form>
    );

}

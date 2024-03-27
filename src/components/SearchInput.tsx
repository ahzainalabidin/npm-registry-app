import { useState } from "react";
import { VscSearch } from "react-icons/vsc";
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
            <div className="relative">

                <div className="absolute inset-y-0 flex items-center pl-3">
                    <VscSearch className="h-5 w-5 text-gray-500" />
                </div>

                <input
                    className="pl-10 py-2 w-full border-0 shadow-none"
                    value={term}
                    onChange={(event) => setTerm(event.target.value)}
                    placeholder="Search packages"
                />

            </div>
        </form>
    );

    // return (
    //     <Form action="/search">
    //         <input name="term" />
    //     </Form>
    // );

}

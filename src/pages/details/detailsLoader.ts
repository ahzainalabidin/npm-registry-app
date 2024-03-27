import { Params } from "react-router-dom";
import { getPackage } from "../../api/queries/getPackage";

export async function detailsLoader({ params }: { params: Params }) {

    const { name } = params;

    if (!name) {
        throw new Error('Name must be provided');
    }

    const details = await getPackage(name);

    return {
        details
    };

}

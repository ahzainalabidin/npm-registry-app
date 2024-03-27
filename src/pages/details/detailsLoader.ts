import { Params } from "react-router-dom";
import { getPackage } from "../../api/queries/getPackage";
import { PackageDetails } from "../../api/types/packageDetails";

export interface DetailsLoaderResult {
    details: PackageDetails;
}

export async function detailsLoader({ params }: { params: Params }): Promise<DetailsLoaderResult> {

    const { name } = params;

    if (!name) {
        throw new Error('Name must be provided');
    }

    const details = await getPackage(name);

    return {
        details
    };

}

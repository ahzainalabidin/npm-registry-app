import { getFeaturedPackages } from "../../api/queries/getFeaturedPackages";
import { PackageDetails } from "../../api/types/packageDetails";

export interface HomeLoaderResult {
    featuredPackages: PackageDetails[];
}

export async function homeLoader(): Promise<HomeLoaderResult> {

    const featuredPackages = await getFeaturedPackages();

    return {
        featuredPackages
    };

}

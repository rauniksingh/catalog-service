import { ICatalogRepository } from "../interface/catalog.interface";

export class CatalogService {
	private _repository: 	ICatalogRepository;

	constructor(repository: ICatalogRepository) {
			this._repository = repository
		}

    async createProduct(data: any) {
			return {
				id: 1,
        name: "Sample",
        description: "Sample",
        price: 1,
        stock: 1
			}
    }

    updateProduct(data: any) {

    }

    getProducts(limit: number, offset: number) {

		}

		getProduct(id: number) {
			
		}

		deleteProduct(id: number) {

		}
}
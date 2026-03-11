import { ICatalogRepository } from "../interface/catalog.interface";

export class CatalogService {
	private _repository: 	ICatalogRepository;

	constructor(repository: ICatalogRepository) {
			this._repository = repository
		}

    createProduct(data: any) {

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
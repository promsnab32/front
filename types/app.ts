export interface CatalogDTO {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  media?: any;
  categories: CategoryDTO[];
}

export interface CategoryDTO {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  catalog: CatalogDTO;
  products: ProductDTO[];
}

export interface ProductDTO {
  id: number;
  documentId: string;
  title: string;
  has: boolean;
  article?: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ResponseDTO<T> {
	data: T;
	meta: {
		total: number;
		page: number;
		limit: number;
	};
}
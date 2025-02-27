export interface CatalogDTO {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  media?: any;
  categories: CategoryDTO[];
  products: ProductDTO[];
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
  catalog: CatalogDTO;
  category: CategoryDTO;
  id: number;
  media?: any
  documentId: string;
  title: string;
  availability: string;
  count: number;
  article?: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ResponseDTO<T> {
	data: T;
	meta: {
    pagination : {
      total: number;
      page: number;
      pageSize: number;
      pageCount: number
    }
	};
}
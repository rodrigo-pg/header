export interface DeleteProductUseCase {
    execute(productId: string): Promise<void>;
}
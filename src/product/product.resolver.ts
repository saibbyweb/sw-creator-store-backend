import { Args, Resolver, Mutation } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { CreateProductInput, UpdateProductInput } from './product.dto';
import { Product } from 'src/---generated---';

@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => Product)
  createProduct(@Args('input') input: CreateProductInput) {
    return this.productService.createProduct(input);
  }

  @Mutation(() => Product)
  updateProduct(@Args('input') input: UpdateProductInput) {
    return this.productService.updateProduct(input);
  }
}

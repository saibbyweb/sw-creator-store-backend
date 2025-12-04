import { Injectable, Logger } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateProductInput, UpdateProductInput } from './product.dto';

@Injectable()
export class ProductService {
  private readonly logger: Logger;
  constructor(private readonly db: DbService) {
    this.logger = new Logger(ProductService.name);
  }

  async createProduct(input: CreateProductInput) {
    try {
      const product = await this.db.product.create({
        data: {
          ...input,
        },
      });

      return product;
    } catch {
      this.logger.error('Failed to create product');
      throw new Error('Failed to create product');
    }
  }

  async updateProduct(input: UpdateProductInput) {
    try {
      const { id, ...rest } = input;
      const updatedProduct = await this.db.product.update({
        where: { id },
        data: rest,
      });
      return updatedProduct;
    } catch {
      this.logger.error('Failed to update product');
      throw new Error('Failed to update product');
    }
  }
}

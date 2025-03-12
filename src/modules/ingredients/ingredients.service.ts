import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from '../../database/entities/ingredient.entity';
import { Repository } from 'typeorm';
import { CreateIngredientDto } from './model/ingredient.dto';

@Injectable()
export class IngredientsService {
	constructor(
		@InjectRepository(Ingredient)
		private ingredientsRepository: Repository<Ingredient>,
	) {}

	async create(createIngredientDto: CreateIngredientDto): Promise<Ingredient> {
		const ingredient = this.ingredientsRepository.create({
			...createIngredientDto,
			unit: { name: createIngredientDto.unit_name },
		});

		return this.ingredientsRepository.save(ingredient);
	}

	async findAll(): Promise<Ingredient[]> {
		return this.ingredientsRepository.find();
	}
}

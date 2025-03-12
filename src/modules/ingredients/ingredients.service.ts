import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from '../../database/entities/ingredient.entity';
import { Repository } from 'typeorm';
import { CreateIngredientsDto } from './models/dto/create-ingredients.dto';
import { GetIngredientsDto } from './models/dto/get-ingredients.dto';

@Injectable()
export class IngredientsService {
	constructor(
		@InjectRepository(Ingredient)
		private ingredientsRepository: Repository<Ingredient>,
	) {}

	async create(body: CreateIngredientsDto): Promise<Ingredient> {
		const ingredient = this.ingredientsRepository.create({
			...body,
			unit: { name: body.unit_name },
		});

		return this.ingredientsRepository.save(ingredient);
	}

	async findOneById({ id }: GetIngredientsDto) {
		const ingredient = await this.ingredientsRepository.findOne({
			where: { id },
		});

		if (!ingredient) {
			throw new NotFoundException(`Ingrediente com ID ${id} não encontrado.`);
		}

		return ingredient;
	}

	async findAll(page: number, limit: number): Promise<[Ingredient[], number]> {
		return this.ingredientsRepository.findAndCount({
			skip: (page - 1) * limit,
			take: limit,
		});
	}

	async update(id: string, body: CreateIngredientsDto) {
		const ingredient = await this.ingredientsRepository.findOne({
			where: { id },
		});

		if (!ingredient) {
			throw new NotFoundException(`Ingrediente com ID ${id} não encontrado.`);
		}

		const updatedIngredient = this.ingredientsRepository.merge(ingredient, body);

		return this.ingredientsRepository.save(updatedIngredient);
	}

	async delete({ id }: GetIngredientsDto) {
		const result = await this.ingredientsRepository.delete(id);

		if (result.affected === 0) {
			throw new NotFoundException(`Ingrediente com ID ${id} não encontrado.`);
		}

		return { message: 'Ingrediente deletado com sucesso' };
	}
}

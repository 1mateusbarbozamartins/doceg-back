import { Body, Controller, Post } from '@nestjs/common';
import { CreateIngredientDto } from './model/ingredient.dto';
import { IngredientsService } from './ingredients.service';

@Controller('ingredients')
export class IngredientsController {
	constructor(private readonly ingredientsService: IngredientsService) {}

	@Post()
	async create(@Body() body: CreateIngredientDto): Promise<object> {
		const createdIngredient = await this.ingredientsService.create(body);

		return {
			message: 'Ingredient created successfully',
			data: createdIngredient,
		};
	}
}

import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Post,
	Put,
	Query,
} from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { CreateIngredientsDto } from './models/dto/create-ingredients.dto';
import { GetIngredientsDto } from './models/dto/get-ingredients.dto';
import { Ingredient } from 'src/database/entities/ingredient.entity';

@Controller('ingredients')
export class IngredientsController {
	constructor(private readonly ingredientsService: IngredientsService) {}

	@Post()
	async create(@Body() body: CreateIngredientsDto): Promise<object> {
		const createdIngredient = await this.ingredientsService.create(body);

		return {
			message: 'Ingredient created successfully',
			data: createdIngredient,
		};
	}

	@Get(':id')
	async find(@Param() params: GetIngredientsDto): Promise<Ingredient> {
		return await this.ingredientsService.findOneById(params);
	}

	@Get()
	async findAll(
		@Query('page', ParseIntPipe) page = 1,
		@Query('limit', ParseIntPipe) limit = 10,
	): Promise<object> {
		const [data, total] = await this.ingredientsService.findAll(page, limit);
		return {
			total,
			page,
			limit,
			data,
		};
	}

	@Put(':id')
	async update(
		@Param() params: GetIngredientsDto,
		@Body() body: CreateIngredientsDto,
	): Promise<object> {
		return {
			message: 'Ingredient updated successfully',
			data: await this.ingredientsService.update(params.id, body),
		};
	}

	@Delete(':id')
	async remove(@Param() params: GetIngredientsDto): Promise<object> {
		return await this.ingredientsService.delete(params);
	}
}

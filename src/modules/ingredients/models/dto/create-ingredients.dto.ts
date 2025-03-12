import { IsNumber, IsString } from 'class-validator';

export class CreateIngredientsDto {
	@IsString()
	name: string;

	@IsString()
	unit_name: string;

	@IsNumber()
	quantity: number;

	@IsNumber()
	price: number;
}

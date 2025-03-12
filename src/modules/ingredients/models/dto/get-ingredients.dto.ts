import { IsNotEmpty, IsUUID } from 'class-validator';

export class GetIngredientsDto {
	@IsUUID()
	@IsNotEmpty()
	id: string;
}

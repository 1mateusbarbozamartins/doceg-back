import { Module } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';
import { Ingredient } from '../../database/entities/ingredient.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [TypeOrmModule.forFeature([Ingredient])],
	controllers: [IngredientsController],
	providers: [IngredientsService, Ingredient],
})
export class IngredientsModule {}

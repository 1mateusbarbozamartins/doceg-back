import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { MeasurementUnitModule } from './measurement-units/measurement-units.module';

@Module({
	imports: [DatabaseModule, IngredientsModule, MeasurementUnitModule],
})
export class AppModule {}

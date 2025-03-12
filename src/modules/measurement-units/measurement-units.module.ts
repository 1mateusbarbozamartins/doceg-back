import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeasurementUnit } from 'src/database/entities/measurement-unit.entity';
import { MeasurementUnitController } from './measurement-units.controller';
import { MeasurementUnitService } from './measurement-units.service';

@Module({
	imports: [TypeOrmModule.forFeature([MeasurementUnit])],
	controllers: [MeasurementUnitController],
	providers: [MeasurementUnitService],
})
export class MeasurementUnitModule {}

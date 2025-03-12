import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MeasurementUnit } from 'src/database/entities/measurement-unit.entity';

@Injectable()
export class MeasurementUnitService {
	constructor(
		@InjectRepository(MeasurementUnit)
		private measurementUnitRepository: Repository<MeasurementUnit>,
	) {}

	async findAll(): Promise<MeasurementUnit[]> {
		return await this.measurementUnitRepository.find();
	}
}

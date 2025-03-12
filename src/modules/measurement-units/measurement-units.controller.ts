import { Controller, Get } from '@nestjs/common';
import { MeasurementUnitService } from './measurement-units.service';

@Controller('measurement-unit')
export class MeasurementUnitController {
	constructor(private readonly measurementUnitService: MeasurementUnitService) {}

	@Get()
	async findAll(): Promise<object> {
		const data = await this.measurementUnitService.findAll();

		return {
			message: 'Ingredient created successfully',
			data,
		};
	}
}

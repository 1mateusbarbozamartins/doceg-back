import { MeasurementUnit } from 'src/database/entities/measurement-unit.entity';
import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
	JoinColumn,
} from 'typeorm';

@Entity('ingredients')
export class Ingredient {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@Column('numeric', { precision: 10, scale: 2 })
	quantity: number;

	@Column('numeric', { precision: 10, scale: 2 })
	price: number;

	@ManyToOne(() => MeasurementUnit, (unit) => unit.ingredients, { eager: true })
	@JoinColumn({ name: 'unit_name', referencedColumnName: 'name' })
	unit: MeasurementUnit;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

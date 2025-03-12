import { Ingredient } from 'src/database/entities/ingredient.entity';
import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
} from 'typeorm';

@Entity('measurement_units')
export class MeasurementUnit {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ unique: true })
	name: string;

	@Column({ nullable: true })
	abbreviation: string;

	@OneToMany(() => Ingredient, (ingredient) => ingredient.unit)
	ingredients: Ingredient[];

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

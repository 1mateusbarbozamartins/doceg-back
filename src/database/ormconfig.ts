import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config({ path: 'src/config/.env.dev' });

const ormconfig: TypeOrmModuleOptions = {
	type: 'postgres',
	url: 'postgresql://postgres.xbuonyurtksoxptdosmx:Bx6Xfb7A5gr25R5S@aws-0-us-west-1.pooler.supabase.com:6543/postgres',
	entities: ['dist/**/*.entity.js'],
	synchronize: false,
	ssl: { rejectUnauthorized: false },
};

export default ormconfig;

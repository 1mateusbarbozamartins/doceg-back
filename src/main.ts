import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import LogsInitialization from './functions/LogsInitialization';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	LogsInitialization();

	const app = await NestFactory.create(AppModule);

	app.enableCors({ origin: true });

	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true,
		}),
	);

	await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

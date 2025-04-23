import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/guards/types/auth.module';
import { ProductsModule } from './modules/produt/product.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: 5432,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [__dirname + '/modules/**/*.entity{.ts,.js}'],
    synchronize: true,
    autoLoadEntities: true,
  }),
    UserModule,
  AuthModule,
  ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'src/config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { host, user, password, name } = configService.database;
        return {
          type: 'mysql',
          host: host,
          username: user,
          password: password,
          database: name,
          entities: [],
          synchronize: true,
          ssl: {},
        };
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/user.module';
// import { User } from './users/user.model';
import { TodosModule } from './todos/todos.module';
import { DATABASENAME, DIALECT, HOST, PASSWORD, USERNAME } from './env';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: DIALECT,
      username: USERNAME,
      password: PASSWORD,
      database: DATABASENAME,
      host: HOST,
      // models: [User],  don't need if autoLoadModels to true and synchronize: true
      autoLoadModels: true,
      synchronize: true,
    }),
    // let Sequelize know about the user model by inserting it into the models array in the module forRoot()
    UsersModule,
    TodosModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

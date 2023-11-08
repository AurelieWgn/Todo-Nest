import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserService } from './user.service';

@Module({
  imports: [SequelizeModule.forFeature([User])], //Sequelize model
  providers: [UserService],
  controllers: [],
  // export it to use it outside this module
  exports: [SequelizeModule],
})
export class UsersModule {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  getAllUsersServiceFunc(): Promise<User[]> {
    return this.userRepository.find();
  }

  createAUserServiceFunc(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  updateAUserServiceFunc(updateUserDto: UpdateUserDto, userId: number) {
    this.userRepository.update(userId, updateUserDto);
    return this.getAUserViaIdServiceFunc(userId);
  }

  getAUserViaIdServiceFunc(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  deleteAUserServiceFunc(userId: number) {
    return this.userRepository.delete(userId);
  }
}

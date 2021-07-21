import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';


@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  create(createUserDto: CreateUserDto) {
    const user = new this.userModel(createUserDto);
    return user.save();
  }

  findAll() {
    return this.userModel.find();//c/find para retornar todos os atributos
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate({
      _id: id //_id mongo por padrão já cria uma chave primaria que se chama _id
    }, {
     $set: updateUserDto
    }, {
      new: true, //basicamente pegar as informações do obj que quero alterar e vai alterar no banco de dados
    }
    );
  }

  remove(id: string) {
    return this.userModel.deleteOne({
      _id: id,
    })
      .exec();
  }
}

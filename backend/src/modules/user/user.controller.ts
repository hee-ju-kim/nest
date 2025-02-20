import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes, Response, HttpStatus, BadRequestException, UseFilters, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { HttpExceptionFilter } from '../../config/error/http-exception.filter';
import { AuthGuard } from '../auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {} // 의존성 주입

  @Post()
  async create(@Body(new ValidationPipe()) createUserDto: CreateUserDto, @Response() res) {
    const result = await this.userService.create(createUserDto)
    console.log(result)
    // return result
    return res.status(HttpStatus.OK).send(result);
  }

  @UseFilters(HttpExceptionFilter) // 해당 부분만 예외처리 > 컨트롤러 단위에도 가능
  @Get()
  findAll(@Response() res) {
    throw new BadRequestException('잘못된 요청입니다!')
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ forbidNonWhitelisted: true,  }))
  // whitelist 검증 규칙이 정의 되어있지 않은 프로퍼티에대해 오류 발생 안하고 넘어감
  // forbidNonWhitelisted DTO에 정의되지 않은 필드가 있다면 예외 발생 > 요청을 막아버림
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}

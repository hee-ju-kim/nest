import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength, Matches } from 'class-validator';
// DTO(Data Transfer Object): 데이터를 주고받을 때 사용하는 객체
// 데이터를 검증하고 변환

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: '이름을 입력해야 합니다.' })
  @MaxLength(50, { message: '이름은 최대 50자까지 입력 가능합니다.' })
  name: string;

  @IsEmail({}, { message: '올바른 이메일 형식이 아닙니다.' })
  @IsNotEmpty({ message: '이메일을 입력해야 합니다.' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: '비밀번호를 입력해야 합니다.' })
  @MinLength(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' })
  @MaxLength(20, { message: '비밀번호는 최대 20자까지 입력 가능합니다.' })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]+$/, {
    message: '비밀번호는 최소 하나의 문자와 숫자를 포함해야 합니다.',
  })
  password: string;
}
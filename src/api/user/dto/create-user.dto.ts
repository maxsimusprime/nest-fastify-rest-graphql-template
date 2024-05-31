import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ required: true, nullable: false })
  @IsString()
  email: string;

  @ApiProperty({ required: true })
  @IsString()
  name: string;
}

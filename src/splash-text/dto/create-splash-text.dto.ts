import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSplashTextDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsBoolean()
  @IsOptional()
  active?: boolean;
}

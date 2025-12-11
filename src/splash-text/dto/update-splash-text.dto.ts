import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateSplashTextDto {
  @IsString()
  @IsOptional()
  item?: string;

  @IsBoolean()
  @IsOptional()
  active?: boolean;
}

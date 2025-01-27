import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @MaxLength(20)
    @MinLength(3)
    UserName:string;

    @IsEmail()
    Email:string;

    @IsNotEmpty()
    @MaxLength(40)
    @MinLength(8)
    HashedPassword:string;

    TechStack:string[];

}

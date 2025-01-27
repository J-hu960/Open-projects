import  { IsDate, IsNotEmpty } from 'class-validator';


export class CreateProjectDto {
    @IsNotEmpty()
    readonly Title:string;
    @IsNotEmpty()
    readonly Description:string;
    @IsNotEmpty()
    readonly Link:string;
    @IsNotEmpty()
    readonly TechStack:string[];
    @IsDate()
    readonly CreationDate:Date;

    @IsNotEmpty()
    readonly CreatedBy:string;
}

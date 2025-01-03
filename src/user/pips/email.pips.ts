import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from "@nestjs/common";

@Injectable()
export class EmailValidationPip implements PipeTransform {
  transform(value: any) {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (regex.test(value)) return value;
    else return new BadRequestException("Email is Invalid");
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoapModule } from 'nestjs-soap';
import { AddService } from './add/add.service';
import { AddController } from './add/add.controller';

@Module({
  imports: [SoapModule.register({
      clientName: 'SPRING_SOAP_CLIENT',
      uri: 'http://MALFK0700000508:8088/mockCalculatorSoap?wsdl', // spring SOAP WSDL endpoint
    }),
],
  controllers: [AppController, AddController],
  providers: [AppService, AddService],
})
export class AppModule {}

import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SolanaModule } from './modules/solana/solana.module';


@Module({
  imports: [
    // MongooseModule.forRootAsync({
    //   useFactory: () => (
    //     {
    //       uri: '',  // environment.database.uri
    //       useNewUrlParser: true,
    //     }
    //   ),
    //   connectionName: 'default'
    // }),

    SolanaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

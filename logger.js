const {createLogger, transports, format} = require('winston')

const logger = createLogger({
    transports: [
      
      new transports.File({ 
          filename: './logger/combined.log',
          maxsize :   '100',   //'10000000' //10mb
          maxFiles : '1',
          format : format.combine(format.timestamp(), format.json())
         })
    ]
  });

  module.exports ={logger}
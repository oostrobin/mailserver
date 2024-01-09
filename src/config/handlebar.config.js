import path from 'path';

export const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('src/views'),
        defaultLayout: false,
    },
    viewPath: path.resolve('src/views'),
  };
export const API_URL: string = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:3030/api';

export const IMGS_URL: string = (process.env.NODE_ENV === 'production') 
? '/public/images/' 
: 'http://localhost:3030/public/images/';

export const SOUNDS_URL: string = (process.env.NODE_ENV === 'production') 
? '/public/sounds/' 
: 'http://localhost:3030/public/sounds/';
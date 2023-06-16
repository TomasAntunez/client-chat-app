/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    // Types of envs
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
    REACT_APP_API_URL: string;
  }
}

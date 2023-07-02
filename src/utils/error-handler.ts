
export const reportError = (error?: unknown): { msg: string } => {
  console.log(error);
  return { msg: 'Something is not right' };
};

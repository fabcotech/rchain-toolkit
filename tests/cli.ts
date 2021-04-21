export const getProcessArgv = (param: string) => {
  const index = process.argv.findIndex(arg => arg === param);
  if (index === -1) {
    return undefined;
  }

  return process.argv[index + 1];
};

export const clsx = (...classes: (string | undefined)[]): string =>
  classes.filter(Boolean).join(' ')

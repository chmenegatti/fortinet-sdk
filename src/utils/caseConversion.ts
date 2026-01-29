const isPlainObject = (value: unknown): value is Record<string, unknown> => {
  if (value === null || typeof value !== "object") {
    return false;
  }

  if (Array.isArray(value)) {
    return false;
  }

  if (value instanceof Date) {
    return false;
  }

  return Object.prototype.toString.call(value) === "[object Object]";
};

const camelToKebab = (input: string): string => {
  return input
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/_/g, "-")
    .toLowerCase();
};

const kebabToCamel = (input: string): string => {
  return input.replace(/[-_](\w)/g, (_, c: string) => c.toUpperCase());
};

export type CaseTransformOptions = {
  preserveKeys?: string[];
  keyMap?: Record<string, string>;
};

const resolveKey = (
  key: string,
  mapper: (value: string) => string,
  options?: CaseTransformOptions
): string => {
  const mapped = options?.keyMap?.[key];
  if (mapped) {
    return mapped;
  }

  if (options?.preserveKeys?.includes(key)) {
    return key;
  }

  return mapper(key);
};

export const toApiCase = (input: unknown, options?: CaseTransformOptions): unknown => {
  if (Array.isArray(input)) {
    return input.map((item) => toApiCase(item, options));
  }

  if (!isPlainObject(input)) {
    return input;
  }

  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(input)) {
    const mappedKey = resolveKey(key, camelToKebab, options);
    result[mappedKey] = toApiCase(value, options);
  }

  return result;
};

export const fromApiCase = (input: unknown, options?: CaseTransformOptions): unknown => {
  if (Array.isArray(input)) {
    return input.map((item) => fromApiCase(item, options));
  }

  if (!isPlainObject(input)) {
    return input;
  }

  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(input)) {
    const mappedKey = resolveKey(key, kebabToCamel, options);
    result[mappedKey] = fromApiCase(value, options);
  }

  return result;
};

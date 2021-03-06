export const required = (value) =>
 value || typeof value === 'number' ? undefined : 'Required';

export const email = (value) =>
 value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? 'Invalid email address'
  : undefined;

export const maxLength = (max) => (value) =>
 value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength15 = maxLength(15);
export const maxLength20 = maxLength(20);
export const maxLength10 = maxLength(10);
export const maxLength50 = maxLength(50);
export const maxLength6 = maxLength(6);

export const minLength = (min) => (value) =>
 value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength4 = minLength(4);
export const minLength10 = minLength(10);
export const minLength6 = minLength(6);
export const minLength8 = minLength(8);

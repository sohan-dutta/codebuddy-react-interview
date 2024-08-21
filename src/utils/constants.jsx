export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const passwordRegex =
  /^(?=(?:[^A-Z]*[A-Z]){2})(?=(?:[^a-z]*[a-z]){2})(?=(?:[^\d]*\d){2})(?=(?:[^\W_]*\W){2}).{8,}$/;

export const nameRegex = /^[a-zA-Z]+$/;

export const mobileNumberRegex = /^\d{10}$/;
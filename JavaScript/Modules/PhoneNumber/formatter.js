export function formatPhone(number) {
  number = number.replace(/\D/g, "");

  if (number.length === 10) {
    return `+91 ${number.slice(0,5)} ${number.slice(5)}`;
  }

  return number;
}
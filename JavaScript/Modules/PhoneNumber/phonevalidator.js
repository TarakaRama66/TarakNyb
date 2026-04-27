import log from "./logger.js";
import { formatPhone } from "./formatter.js";

export function validatePhone(phone) {

  // Remove spaces & hyphens
  phone = phone.replace(/[\s-]/g, "");

  // Remove +91 if present
  if (phone.startsWith("+91")) {
    phone = phone.slice(3);
  }

  // Check 10 digits starting 6-9
  const pattern = /^[6-9]\d{9}$/;

  if (!pattern.test(phone)) {
    log("Invalid phone number");
    return false;
  }

  log("Valid phone number: " + formatPhone(phone));
  return true;
}
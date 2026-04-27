// try-catch
try {
  JSON.parse("{invalid}");
} catch (error) {
  console.log("Parsing error:", error.message);
}

// Catches runtime errors and prevents program failure

// finally Block
try {
  console.log("Inside try block");
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Always executes");
}
// finally executes whether an error occurs or not

// throw Error
function checkAge(age) {
  if (age < 18) {
    throw new Error("Age must be 18 or above");
  }
  return "Access granted";
}

try {
  console.log(checkAge(23));
} catch (error) {
  console.log(error.message);
}
// Manually throws custom errors

// Async & Await Error Handling
async function load() {
  try {
    await Promise.reject("Failed");
  } catch (e) {
    console.log(e);
  }
}
load();








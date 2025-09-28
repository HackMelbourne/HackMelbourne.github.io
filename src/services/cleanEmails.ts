export default function cleanEmail(email: string): string {
  // Define the regex pattern
  const pattern = /\.(?=.*@)|\+.*(?=@)/g;

  // Use replace() method to replace matches with an empty string
  const outputString = email.replace(pattern, "");

  return outputString;
}

export default function cleanEmail(email: string): string {
  // Define the regex pattern
  var pattern = /\.(?=.*@)|\+.*(?=@)/g;

  // Use replace() method to replace matches with an empty string
  var outputString = email.replace(pattern, "");

  return outputString;
}

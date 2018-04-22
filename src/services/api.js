export function getPractitionerByFamilyName(familyName) {
  console.log("HERE");
  fetch("http://hapi.fhir.org/baseDstu3/Practitioner?family=Smith")
    .then(res => res.json())
    .then(
      result => {
        return result.entry;
      },
      error => {
        console.log("error:", error);
        return "error";
      }
    );
}

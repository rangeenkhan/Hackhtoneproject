const ProfilePictureInput =document.getElementById('profilePicture') as HTMLInputElement;
// picture elements
const ProfilePictureFile = ProfilePictureInput.files?.[0]
const ProfilePictureURL = ProfilePictureFile ? URL.createObjectURL(ProfilePictureFile) : "";

const ResumeOutput = `
<h2>Resume</h2>
${ProfilePictureURL ? `<img src="${ProfilePictureURL} alt="Profile Picture" class="profilePicture">` : ""}
`;

















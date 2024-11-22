var _a;
var ProfilePictureInput = document.getElementById('profilePicture');
// picture elements
var ProfilePictureFile = (_a = ProfilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
var ProfilePictureURL = ProfilePictureFile ? URL.createObjectURL(ProfilePictureFile) : "";
var ResumeOutput = "\n<h2>Resume</h2>\n".concat(ProfilePictureURL ? "<img src=\"".concat(ProfilePictureURL, " alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n");

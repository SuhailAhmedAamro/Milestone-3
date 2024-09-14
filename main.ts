document.addEventListener('DOMContentLoaded', () => {
const profilePicInput = document.getElementById('profile-pic') as HTMLInputElement;
const profilePicPreview = document.getElementById('profile-pic-preview') as HTMLImageElement;
const generateResumeButton = document.getElementById('generate-resume') as HTMLButtonElement;
const resumePreview = document.getElementById('resume-preview') as HTMLDivElement;
const resumeContent = document.getElementById('resume-content') as HTMLDivElement;

// Function to handle profile picture preview
profilePicInput.addEventListener('change', () => {
const file = profilePicInput.files?.[0];
if (file) {
const reader = new FileReader();
reader.onload = () => {
profilePicPreview.src = reader.result as string;
profilePicPreview.style.display = 'block';
};
reader.readAsDataURL(file);
} else {
profilePicPreview.style.display = 'none';
}
});

// Function to generate resume
generateResumeButton.addEventListener('click', () => {
const name = (document.getElementById('name') as HTMLInputElement).value;
const email = (document.getElementById('email') as HTMLInputElement).value;
const phone = (document.getElementById('phone') as HTMLInputElement).value;
const education = (document.getElementById('education') as HTMLTextAreaElement).value;
const skills = (document.getElementById('skills') as HTMLInputElement).value;
const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
const profilePicSrc = profilePicPreview.src;

if (name && email && phone && education && skills && workExperience) {
resumeContent.innerHTML = `
${profilePicSrc ? `<img src="${profilePicSrc}" alt="Profile Picture" style="width: 150px; height: 150px; border-radius: 50%; margin-bottom: 10px;">` : ''}
<h2>${name}</h2>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<h3>Education</h3>
<p>${education}</p>
<h3>Skills</h3>
<p>${skills}</p>
<h3>Work Experience</h3>
<p>${workExperience}</p>
`;
resumePreview.style.display = 'block';
} else {
alert('Please fill out all fields.');
}
});
});
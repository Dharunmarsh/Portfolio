import myResume from '../assets/files/Dharun_Marshall_Resume.pdf'; // Importing the resume file


export const handleDownload = () => {
    const link = document.createElement('a');
    link.href = myResume;
    link.download = 'Dharun_Marshall_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
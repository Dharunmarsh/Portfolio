import myResume from '../assets/files/DharunMarshallResume.pdf'; // Importing the resume file


export const handleDownload = () => {
    const link = document.createElement('a');
    link.href = myResume;
    link.download = 'DharunMarshallResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  };

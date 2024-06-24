function download(){
    const link=document.createElement("a");

    link.href="https://raw.githubusercontent.com/Keerthi-0603/My_Portolio/main/K_V.pdf";
    link.download="resume.pdf";
    link.click();
}

document.getElementById("downloadButton").addEventListener("click", function() {
    // Replace "example.pdf" with the path to your PDF file
    var pdfFilePath = "K_V.pdf";
    
    // Create an anchor element
    var anchorElement = document.createElement("a");
    
    // Set the href attribute to the PDF file path
    anchorElement.href = pdfFilePath;
    
    // Set the download attribute to force download
    anchorElement.download = "K_V.pdf";
    
    // Trigger a click event on the anchor element to start downloading
    anchorElement.click();
});

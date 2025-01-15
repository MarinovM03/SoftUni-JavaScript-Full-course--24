function extractFile(path) {
    const pathParts = path.split('\\');
    const fileNameExt = pathParts.pop();
    const lastDotIndex = fileNameExt.lastIndexOf('.');

    const fileName = fileNameExt.substring(0, lastDotIndex);
    const fileExtension = fileNameExt.substring(lastDotIndex + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
// extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');
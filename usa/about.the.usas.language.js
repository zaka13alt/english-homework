// Attempt to open the blank tab
const newTab = window.open('about:blank', '_blank');

if (newTab) {
    // Inject the iframe if successful
    newTab.document.write(`<iframe src="${window.location.href}" style="width:100%; height:100%; border:none;"></iframe>`);
    newTab.document.close();
    
    // 
    window.location.href = 'https://drive.google.com';
} else {
    // 
    alert('Popup blocked! Please allow popups for this site and try again.');
}


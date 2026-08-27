// Core function that safely checks and retrieves the topmost URL context
function generateIframeHtml() {
  let targetUrl;
  try {
    // Read the topmost window URL directly
    targetUrl = window.top.location.href;
  } catch (error) {
    // Fallback if cross-origin restrictions block window.top access
    targetUrl = window.location.href;
  }

  return `
    <!DOCTYPE html>
    <html>
    <head><title></title></head>
    <body style="margin:0; padding:0; overflow:hidden;">
        <iframe src="${targetUrl}" style="position:fixed; top:0; left:0; width:100%; height:100%; border:none;"></iframe>
    </body>
    </html>
  `;
}

// Universal alert function for blocked window operations
function handlePopupBlock() {
  alert("Popup blocked! Please allow popups for this site to cl0ak");
}

// Assign functionality to the about:blank click handler
document.getElementById('open-ab')?.addEventListener('click', () => {
  const newWindow = window.open('about:blank', '_blank');
  
  if (newWindow) {
    const htmlContent = generateIframeHtml();
    newWindow.document.write(htmlContent);
    newWindow.document.close();
  } else {
    handlePopupBlock();
  }
});

// Assign functionality to the Blob URL click handler
document.getElementById('open-blob')?.addEventListener('click', () => {
  const htmlContent = generateIframeHtml();
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const blobUrl = URL.createObjectURL(blob);
  
  const newWindow = window.open(blobUrl, '_blank');
  
  if (!newWindow) {
    handlePopupBlock();
    URL.revokeObjectURL(blobUrl); 
  }
});

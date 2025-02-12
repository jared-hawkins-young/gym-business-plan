const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Open the local HTML file and wait for the page to fully load
    await page.goto('file://' + __dirname + '/index.html', { waitUntil: 'networkidle2' });

    // Increase the viewport height to capture more content
    await page.setViewport({ width: 1280, height: 3000 });

    // Generate the PDF with better formatting
    await page.pdf({
        path: 'business-plan.pdf',
        format: 'A4',
        printBackground: true, // Ensures background colors are printed
        margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' },
        scale: 0.9, // Adjusts scaling to prevent page cutoff
    });

    await browser.close();
    console.log("✅ PDF Generated Successfully!");
})();
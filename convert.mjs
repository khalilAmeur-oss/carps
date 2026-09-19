import fs from 'fs';
import path from 'path';

const srcDir = 'c:/Users/PC/Downloads/maamar as/src/components';
const destDir = 'c:/Users/PC/Downloads/maamar v2/src/components/v0';

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(srcDir, file), 'utf8');
    
    // Extract everything inside return (...)
    const match = content.match(/return \(([\s\S]*?)\);\n};/);
    let htmlContent = match ? match[1] : content;
    
    // Replace className with class
    htmlContent = htmlContent.replace(/className=/g, 'class=');
    
    // Replace htmlFor with for
    htmlContent = htmlContent.replace(/htmlFor=/g, 'for=');
    
    // Replace style={{ ... }} with style="..."
    // This is hard to do with regex perfectly, but we can do basic ones or just let me manually fix them.
    
    // Remove {t...} variables and replace with placeholder
    htmlContent = htmlContent.replace(/\{t([^}]+)\}/g, '[CONTENT]');

    let astroContent = `---
// Converted from ${file}
---
${htmlContent}
`;

    fs.writeFileSync(path.join(destDir, file.replace('.jsx', '.astro')), astroContent);
    console.log(`Converted ${file}`);
});

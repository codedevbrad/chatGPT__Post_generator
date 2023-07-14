import fs from 'fs';

export function loadFromJsonFile(jsonFilePath: string): any[] {
  try {
    const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error(`Failed to load JSON file: ${error}`);
    return [];
  }
}
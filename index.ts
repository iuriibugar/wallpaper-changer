import { setWallpaper, screens } from 'wallpaper';
import path from 'path';
import fs from 'fs';

// Абсолютний шлях до файлу шпалер
const wallpaperPath = path.resolve(__dirname, 'wallpapers/pexels-lastly-937782.jpg');

// Інтервал оновлення (в мілісекундах)
const interval = 20 * 60 * 1000; // 20 хв

async function setWallpaperEvery20Minutes() {
  if (!fs.existsSync(wallpaperPath)) {
    console.error('❌ Файл шпалер не знайдено:', wallpaperPath);
    return;
  }

  const applyWallpaper = async () => {
    try {
      await setWallpaper(wallpaperPath, { screen: 'all' }); // Використовуємо імпортований метод setWallpaper
      console.log(`✅ Шпалери встановлено: ${wallpaperPath}`);
    } catch (err) {
      console.error('❌ Помилка встановлення шпалер:', err);
    }
  };

  // Встановлюємо одразу
  await applyWallpaper();

  // І далі кожні 20 хв
  setInterval(applyWallpaper, interval);
}

setWallpaperEvery20Minutes();
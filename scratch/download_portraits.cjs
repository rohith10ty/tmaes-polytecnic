const https = require('https');
const fs = require('fs');
const path = require('path');

const list = [
  // Men in business suits / professors
  { id: 'photo-1534528741775-53994a69daeb', name: 'casual_woman' },
  { id: 'photo-1507003211169-0a1dd7228f2d', name: 'casual_man' },
  { id: 'photo-1500648767791-00dcc994a43e', name: 'casual_man2' },
  { id: 'photo-1519085360753-af0119f7cbe7', name: 'suit_asian' },
  { id: 'photo-1472099645785-5658abf4ff4e', name: 'exec_older' },
  { id: 'photo-1506794778202-cad84cf45f1d', name: 'male_portrait' },
  { id: 'photo-1560250097-0b93528c311a', name: 'exec_suit' },
  { id: 'photo-1556157382-97eda2d62296', name: 'exec_blazer' },
  { id: 'photo-1537368910025-700350fe46c7', name: 'doctor_male' },
  { id: 'photo-1622253692010-333f2da6031d', name: 'doctor_tattoos' },
  // Professional women / deans
  { id: 'photo-1573496359142-b8d87734a5a2', name: 'woman_orange_bg' },
  { id: 'photo-1580894732444-8ecded7900cd', name: 'prof_woman' },
  { id: 'photo-1573497019940-1c28c88b4f3e', name: 'exec_woman_suit' },
  { id: 'photo-1580489944761-15a19d654956', name: 'woman_portrait' },
  { id: 'photo-1508214751196-bcfd4ca60f91', name: 'woman_older' },
  // More candidates:
  { id: 'photo-1516321318423-f06f85e504b3', name: 'office_group' },
  { id: 'photo-1522071820081-009f0129c71c', name: 'students_group' },
  { id: 'photo-1531482615713-2afd69097998', name: 'students_tech' }
];

list.forEach(item => {
  const u = `https://images.unsplash.com/${item.id}?w=300&auto=format&fit=crop&q=80`;
  const dest = path.join('scratch', item.name + '.jpg');
  const file = fs.createWriteStream(dest);
  https.get(u, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Done:', item.name);
    });
  });
});
